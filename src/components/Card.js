import React from "react";

import Col from "react-bootstrap/Col";

import { CardTitleWrapper, ImageWrapper, StyledCard, StyledImage } from "../assets/Styles";

/**
 * Organisation Card Component to Display on the Orgs List.
 *
 * @param name Name of the Organisation.
 * @param image Airtable Image Object.
 * @param website URL of the Orgs Website.
 * @returns {JSX.Element} Full Rendered Card Component.
 */
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

// Export the Component.
export default Card;
