import React from "react";
import Select from "react-select";

import { SelectorWrapper } from "../assets/Styles";

const CategoryFilter = ({ category, handleLocalChange, components }) => (
  <SelectorWrapper>
    <h5>{ category.title }</h5>
    <Select
      value={ category.selected }
      onChange={ (val, metadata) => handleLocalChange(val, metadata, category) }
      closeMenuOnSelect={ false }
      components={ components }
      isMulti
      options={ category.values }
    />
  </SelectorWrapper>
);

export default CategoryFilter;