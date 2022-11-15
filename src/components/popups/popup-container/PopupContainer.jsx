import React from 'react';
import PropTypes from 'prop-types';

function PopupContainer(props) {
  const { active, header, children } = props;

  return (
    <div className={active ? 'popup active' : 'popup'}>
      <div className="popup__container">
        <div className="popup__content">
          {header}
          <div className="popup__wrapper">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

PopupContainer.propTypes = {
  header: PropTypes.element.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default PopupContainer;
