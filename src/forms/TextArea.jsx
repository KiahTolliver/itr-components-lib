import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.module.less'

const propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    invalid: PropTypes.bool
};

const defaultProps = {
    active: true,
    disabled: false,
    invalid: false,
};

function TextArea({
    disabled,
    invalid,
}) {
    return (
        <textarea
        class="primary"
        rows="5"
        disabled={disabled}>
        </textarea>
    );
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;