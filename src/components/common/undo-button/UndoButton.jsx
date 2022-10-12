import PropTypes from "prop-types";

export default function UndoButton(props) {
    const {title, onClick} = props;

    return (
        <button
            onClick={onClick}
            className="conf-step__button conf-step__button-regular"
        >{title}
        </button>
    )
}

UndoButton.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
}