import React from "react";
import Select from "react-select";

import { SelectorWrapper } from "../assets/Styles";

/**
 * Category Filter Dropdown Component to Display the Filter Options for user choice.
 * Makes use of the React-Select library.
 *
 * @param category Category Object the Filter Dropdown Component applies to.
 * @param handleLocalChange Helper Method to handle the change of a Filter.
 * @param components Category Filter Dropdown Inner Components. _(not important for our use cases)_.
 * @returns {JSX.Element} Full Rendered Filter Component.
 */
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

// Export the Component.
export default CategoryFilter;
