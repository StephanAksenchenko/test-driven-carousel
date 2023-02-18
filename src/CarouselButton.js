import React from 'react';
import PropTypes from 'prop-types';

const CarouselButton = (props) => <button {...props} />;

export default CarouselButton;

CarouselButton.propTypes = {
  children: PropTypes.node.isRequired,
}