import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { showComponent, isDisable, content } = props;
  <button
  type="button"
  disabled={isDisable}
  onClick={() => showComponent()}
  >
    {content}
  </button>
}

Button.propTypes = {
  showComponent: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
}

export default Button;
