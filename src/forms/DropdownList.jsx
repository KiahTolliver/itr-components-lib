import React from 'react';
import PropTypes from 'prop-types';
import './DropdownList.module.less'

const propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    invalid: PropTypes.bool
  };
  const defaultProps = {
    active: true,
    children: null,
    disabled: false,
    invalid: false
  };

  function DropdownList({
      children,
      disabled,
      invalid,
  }) {
      return (
        <select
        class= "primary"
        disabled={disabled}
        invalid={invalid}>
       <option value="" selected disabled hidden>Select</option>
       </select>
      );          
  }

  DropdownList.propTypes = propTypes;
  DropdownList.defaultProps = defaultProps;

  export default DropdownList;