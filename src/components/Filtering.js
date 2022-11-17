import React, { useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const Filtering = ({ applyFilter, baseCategories }) => {
  const [ categories ] = useState(baseCategories);

  const clearAllFilters = () => {
    categories.forEach((cat) => handleLocalChange([], null, cat));
  };

  const handleLocalChange = (val, metadata, category) => {
    category.selected = val;
    applyFilter(val, metadata, category.id)
  }

  return (
    <Container style={ { paddingTop: "10%" } }>
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
          />)
        }
      </Row>
      <Row>
        <Button onClick={ () => clearAllFilters() }>
          Clear
        </Button>
      </Row>
    </Container>
  );
}

const CategoryFilter = ({ category, handleLocalChange }) => (
  <Col>
    <h5>{ category.title }</h5>
    <Select
      value={ category.selected }
      onChange={ (val, metadata) => handleLocalChange(val, metadata, category) }
      closeMenuOnSelect={ false }
      components={ animatedComponents }
      isMulti
      options={ category.values }
    />
  </Col>
);


export default Filtering;