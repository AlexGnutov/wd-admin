import PropTypes from "prop-types";

function PopupCancelButton(props) {
    const {onCancelClick} = props;

    const onClick = () => {
        onCancelClick();
    }

    return (
        <button
            type="button"
            className="conf-step__button conf-step__button-regular"
            onClick={onClick}
        >Отменить</button>
    )
}

PopupCancelButton.propTypes = {
    onCancelClick: PropTypes.func,
}

export default PopupCancelButton;