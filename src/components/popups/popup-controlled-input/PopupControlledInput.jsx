import PropTypes from "prop-types";

function PopupControlledInput(props) {
    const {value, label, onChange, name, type, placeholder, disabled} = props;

    return (
        <label className="conf-step__label conf-step__label-fullsize" htmlFor={name}>
            {label}
            <input
                value={value}
                onChange={(e) => onChange(e.target.name, e.target.value)}
                className="conf-step__input"
                type={type} placeholder={placeholder}
                name={name}
                disabled={disabled}
                required
            />
        </label>
    )
}

PopupControlledInput.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

export default PopupControlledInput;
