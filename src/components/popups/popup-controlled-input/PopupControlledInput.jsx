import React from 'react';
import PropTypes from 'prop-types';

function PopupControlledInput(props) {
  const {
    value, label, onChange, name, type, placeholder, disabled,
  } = props;

  return (
    <label className="conf-step__label conf-step__label-fullsize" htmlFor={name}>
      {label}
      <input
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        className="conf-step__input"
        type={type}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        required
      />
    </label>
  );
}

PopupControlledInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default PopupControlledInput;
