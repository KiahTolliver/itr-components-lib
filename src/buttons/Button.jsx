import React from 'react';
import PropTypes from 'prop-types';
import './Button.module.less'

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

const defaultProps = {
  active: true,
  children: null,
  onClick: () => {},
  disabled: false,
};

function Button({
  children,
  onClick,
  disabled,
}) {
  return (
    <button
    class="primary" 
      disabled={disabled}
      onClick={onClick}>
        {children}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
