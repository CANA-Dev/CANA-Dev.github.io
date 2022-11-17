import React, { useState } from 'react';

import Filtering from "./components/Filtering";
import List from "./components/List";

import Orgs from "./assets/dummydata/Orgs";
import Categories from "./assets/Categories";
import BaseFilter from "./assets/Filters";

import { Wrapper } from "./assets/Styles";

const App = () => {
  const [ appliedFilter ] = useState(BaseFilter);
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
    <Wrapper>
      <Filtering applyFilter={ applyFilter }
                 baseCategories={ Categories } />

      <List dataset={ dataset } />
    </Wrapper>
  );
}

export default App;
