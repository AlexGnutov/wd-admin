import PropTypes from "prop-types";

function PopupContainer(props) {
    const {active, header} = props;

    return (
        <div className={active ? "popup active" : "popup"}>
            <div className="popup__container">
                <div className="popup__content">
                        {header}
                    <div className="popup__wrapper">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

PopupContainer.propTypes = {
    header: PropTypes.element,
    active: PropTypes.bool,
}

export default PopupContainer;

