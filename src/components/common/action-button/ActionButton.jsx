import PropTypes from "prop-types";

export default function ActionButton(props) {
    const {onClick, title} = props;

    return (
        <button className="conf-step__button conf-step__button-accent" onClick={onClick}>
            {title}
        </button>
    )
}

ActionButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
}
