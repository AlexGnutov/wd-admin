import PropTypes from "prop-types";

function PopupSubmitButton(props) {
    const {buttonTitle} = props;

    return (
        <button type="submit" className="conf-step__button conf-step__button-accent">
            {buttonTitle}
        </button>
    )
}

PopupSubmitButton.propTypes = {
    buttonTitle: PropTypes.string,
}

export default PopupSubmitButton;
