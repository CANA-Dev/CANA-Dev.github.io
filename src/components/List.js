import React from 'react';
import { Container, Row } from "react-bootstrap";
import Card from "./Card";

const List = ({ dataset }) => {
  const OrgCards = () => dataset.map((item, index) => <Card key={ index }
                                                            name={ item.name }
                                                            website={ item.website } />)
  return (
    <Container style={ { paddingTop: "10%" } }>
      <Row lg={ 3 }
           md={ 3 }
           sm={ 1 }
           xl={ 3 }
           xs={ 1 }>
        <OrgCards />
      </Row>
    </Container>
  );
}

export default List;