import React, { useEffect, useState } from 'react';

import Filtering from "./components/Filtering";
import List from "./components/List";
import Categories from "./assets/Categories";
import BaseFilter from "./assets/Filters";

import { Wrapper } from "./assets/Styles";
import { getMembers } from "./assets/Airtable";
import Loader from "./components/Loader";

/**
 * This is the main Component of our Website, it deals with most of the shared logic, called child components for
 * rendering the parts of the website.
 *
 * @returns {JSX.Element} Final JS Component
 */
const App = () => {
  // Whether the page is still loading.
  const [ loading, setLoading] = useState(true);
  // Current Applied Search Filter.
  const [ appliedFilter ] = useState(BaseFilter);
  // Base Dataset of Orgs.
  const [ baseDataset, setBaseDataset ] = useState([]);
  // Filtered Dataset of Orgs.
  const [ dataset, setDataset ] = useState([]);

  // Default Load Method.
  useEffect(() => {
    getMembers(setBaseDataset, setDataset, setLoading);
  }, [])

  // Apply a filter to the current Dataset.
  const applyFilter = (val, metadata, type) => {
    if (!appliedFilter.hasOwnProperty(type)) {
      console.error("Invalid Type to Change");
      return;
    }
    appliedFilter[`${ type }`] = val;
    reRenderList();
  }

  // Force Re-Render the Dataset.
  const reRenderList = () => {
    let workingSet = [ ...baseDataset ];
    Object.keys(appliedFilter).forEach((key) => {
      appliedFilter[`${ key }`].forEach((val) => {
        workingSet = workingSet.filter(item => item[`${ key }`].includes(val.value));
      });
    })
    setDataset(workingSet);
  }

  // Loading Blocker so no broken content is rendered.
  if (loading)
    return (<Loader />)

  // Return the valid Rendered Component.
  return (
    <Wrapper>
      <Filtering applyFilter={ applyFilter }
                 baseCategories={ Categories } />

      <List dataset={ dataset } />
    </Wrapper>
  );
}

// Export the Component.
export default App;
