import React from "react";
import PropTypes from "prop-types";
import { LoaderWrapper } from "../assets/Styles";
import { Spinner } from "react-bootstrap";

const Loader = ({ opacity }) => (
  <LoaderWrapper opacity={ opacity }>
    <Spinner />
  </LoaderWrapper>
);

Loader.propTypes = {
  opacity: PropTypes.number,
};

Loader.defaultProps = {
  opacity: 1,
};

export default Loader;