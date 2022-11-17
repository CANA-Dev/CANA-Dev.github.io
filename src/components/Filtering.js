import React, { useState } from 'react';
import { Container, Row } from "react-bootstrap";
import makeAnimated from 'react-select/animated';

import CategoryFilter from "./CategoryFilter";

import { ClearWrapper, StyledButton } from "../assets/Styles";

const Filtering = ({ applyFilter, baseCategories }) => {
  const [ categories ] = useState(baseCategories);
  const animatedComponents = makeAnimated();

  const clearAllFilters = () => {
    categories.forEach((cat) => handleLocalChange([], null, cat));
  };

  const handleLocalChange = (val, metadata, category) => {
    category.selected = val;
    applyFilter(val, metadata, category.id)
  }

  return (
    <Container>
      <ClearWrapper>
        <StyledButton onClick={ () => clearAllFilters() }>
          CLEAR
        </StyledButton>
      </ClearWrapper>

      <Row lg={ 3 }
           md={ 3 }
           sm={ 1 }
           xl={ 3 }
           xs={ 1 }>
        {
          categories.map((cat) => <CategoryFilter
            key={ cat.id }
            category={ cat }
            handleLocalChange={ handleLocalChange }
            components={ animatedComponents }
          />)
        }
      </Row>
    </Container>
  );
}


export default Filtering;