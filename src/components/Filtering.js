import React, { useState } from 'react';
import { Container, Row } from "react-bootstrap";
import makeAnimated from 'react-select/animated';

import CategoryFilter from "./CategoryFilter";

import { ClearWrapper, StyledButton } from "../assets/Styles";

/**
 * Combined Filtering Component to Display all Filter Category Dropdown Components.
 *
 * @param applyFilter Global Filter Applying Function.
 * @param baseCategories All Base Filter Categories to display.
 * @returns {JSX.Element} Full Rendered Combined List Filters Component.
 */
const Filtering = ({ applyFilter, baseCategories }) => {
  // Local version of the Filter Categories.
  const [ categories ] = useState(baseCategories);
  // Generate Default Category Filter Dropdown inner Components.
  const animatedComponents = makeAnimated();

  // Helper Function to clear all the current applied filters.
  const clearAllFilters = () => {
    categories.forEach((cat) => handleLocalChange([], null, cat));
  };

  // Helper Method to handle the change of a Filter locally.
  const handleLocalChange = (val, metadata, category) => {
    category.selected = val;
    applyFilter(val, metadata, category.id)
  }

  // Return the Dynamically generate Component Display.
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

// Export the Component.
export default Filtering;
