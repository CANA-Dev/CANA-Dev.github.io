import React, { useState } from 'react';
import Filtering from "./components/Filtering";
import List from "./components/List";
import Orgs from "./assets/dummydata/Orgs";
import Categories from "./assets/Categories";

const App = () => {
  const baseFilter = {
    "topics": [],
    "approach": [],
    "diversity": []
  };

  const [ appliedFilter ] = useState(baseFilter);
  const [ dataset, setDataset ] = useState(Orgs);

  const applyFilter = (val, metadata, type) => {
    if (!appliedFilter.hasOwnProperty(type)) {
      console.error("Invalid Type to Change");
      return;
    }
    appliedFilter[`${ type }`] = val;
    reRenderList();
  }

  const reRenderList = () => {
    let workingSet = [ ...Orgs ];
    Object.keys(appliedFilter).forEach((key) => {
      appliedFilter[`${ key }`].forEach((val) => {
        workingSet = workingSet.filter(item => item[`${ key }`].includes(val.value));
      });
    })
    setDataset(workingSet);
  }

  return (
    <>
      <Filtering applyFilter={ applyFilter }
                 baseCategories={ Categories } />

      <List dataset={ dataset } />
    </>
  );
}

export default App;
