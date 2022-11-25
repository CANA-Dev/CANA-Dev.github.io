import React from 'react';
import { Row } from "react-bootstrap";

import Card from "./Card";

import { ListWrapper } from "../assets/Styles";

/**
 * Complete Organisation Display List Component.
 *
 * @param dataset Filtered Organisation Dataset to Display
 * @returns {JSX.Element} Full Rendered Organisation List Component.
 */
const List = ({ dataset }) => (
  <ListWrapper>
    <Row lg={ 3 }
         md={ 3 }
         sm={ 1 }
         xl={ 3 }
         xs={ 1 }>
      { dataset.map((item, index) => <Card key={ index }
                                           image={ ( !!item.logo && item.logo.length > 0 ) ?
                                                   item.logo[0] :
                                                   null }
                                           name={ item.name }
                                           website={ item.website } />) }
    </Row>
  </ListWrapper>
);

// Export the Component.
export default List;
