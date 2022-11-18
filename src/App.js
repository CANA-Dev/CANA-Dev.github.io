import React, { useEffect, useState } from 'react';

import Filtering from "./components/Filtering";
import List from "./components/List";
import Categories from "./assets/Categories";
import BaseFilter from "./assets/Filters";

import { Wrapper } from "./assets/Styles";
import { getMembers } from "./assets/Airtable";
import Loader from "./components/Loader";

const App = () => {
  const [ loading, setLoading] = useState(true);
  const [ appliedFilter ] = useState(BaseFilter);
  const [ baseDataset, setBaseDataset ] = useState([]);
  const [ dataset, setDataset ] = useState([]);

  useEffect(() => {
    getMembers(setBaseDataset, setDataset, setLoading);
  }, [])


  const applyFilter = (val, metadata, type) => {
    if (!appliedFilter.hasOwnProperty(type)) {
      console.error("Invalid Type to Change");
      return;
    }
    appliedFilter[`${ type }`] = val;
    reRenderList();
  }

  const reRenderList = () => {
    let workingSet = [ ...baseDataset ];
    Object.keys(appliedFilter).forEach((key) => {
      appliedFilter[`${ key }`].forEach((val) => {
        workingSet = workingSet.filter(item => item[`${ key }`].includes(val.value));
      });
    })
    setDataset(workingSet);
  }

  if (loading)
    return (<Loader />)

  return (
    <Wrapper>
      <Filtering applyFilter={ applyFilter }
                 baseCategories={ Categories } />

      <List dataset={ dataset } />
    </Wrapper>
  );
}

export default App;
