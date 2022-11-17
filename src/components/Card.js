import React from "react";

import Col from "react-bootstrap/Col";

import { StyledCard } from "../assets/Styles";

const Card = ({ name, image, website }) => (
  <Col>
    <StyledCard>
      { !!image &&
        <div style={ { paddingBottom: "10px" } }>
          <img src={ image }
               alt={ `${ name }'s Logo` } />
        </div>
      }
      <div>
        <h3><a href={ website }>{ name.toUpperCase() }</a></h3>
      </div>
    </StyledCard>
  </Col>
);

export default Card;