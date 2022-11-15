import React from 'react';
import PropTypes from 'prop-types';

function Chair(props) {
  const { type, onClick } = props;

  const getChairTypeString = (t) => {
    switch (t) {
      case 'd':
        return 'disabled';
      case 's':
        return 'standart';
      case 't':
        return 'taken';
      case 'v':
        return 'vip';
      default:
        return null;
    }
  };

  const string = getChairTypeString(type);

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <span
      onClick={onClick}
      className={`conf-step__chair conf-step__chair_${string}`}
    />
  );
}

Chair.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Chair;
