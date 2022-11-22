import React from "react";

import Col from "react-bootstrap/Col";

import { CardTitleWrapper, ImageWrapper, StyledCard, StyledImage } from "../assets/Styles";

const Card = ({ name, image, website }) => (
  <Col>
    <StyledCard>
      { !!image &&
        <ImageWrapper>
          <StyledImage
            src={ image.url }
            alt={ `${ name }'s Logo` } />
        </ImageWrapper>
      }
      <CardTitleWrapper>
        <h3><a href={ website }>{ name.toUpperCase() }</a></h3>
      </CardTitleWrapper>
    </StyledCard>
  </Col>
);

export default Card;