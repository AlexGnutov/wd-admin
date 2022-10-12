import close from '../../../i/close.png';
import PropTypes from "prop-types";

function PopupHeader(props) {
    const {title, onCloseClick} = props;

    const onClose = () => {
        onCloseClick();
    }

    return (
        <div className="popup__header">
            <h2 className="popup__title">
                {title}
                <div className="popup__dismiss" >
                    <img src={close} alt="Закрыть" onClick={onClose}/>
                </div>
            </h2>
        </div>
    )
}

PopupHeader.propTypes = {
    title: PropTypes.string,
    onCloseClick: PropTypes.func,
}

export default PopupHeader;