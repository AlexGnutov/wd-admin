import React from 'react';
import PropTypes from 'prop-types';

export default function UndoButton(props) {
  const { title, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="conf-step__button conf-step__button-regular"
    >
      {title}
    </button>
  );
}

UndoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
