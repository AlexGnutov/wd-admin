import React from 'react';
import PropTypes from 'prop-types';
import close from '../../../i/close.png';

function PopupHeader(props) {
  const { title, onCloseClick } = props;

  const onClose = () => {
    onCloseClick();
  };

  return (
    <div className="popup__header">
      <h2 className="popup__title">
        {title}
        <div className="popup__dismiss">
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <img src={close} alt="Закрыть" onClick={onClose} />
        </div>
      </h2>
    </div>
  );
}

PopupHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default PopupHeader;
