import React from 'react';
import PropTypes from 'prop-types';

function DashboardBlock(props) {
  const { header, children } = props;

  const toggleStep = (e) => {
    e.stopPropagation();
    e.target.classList.toggle('conf-step__header_closed');
    e.target.classList.toggle('conf-step__header_opened');
  };

  return (
    <section className="conf-step">
      <header onClick={toggleStep} className="conf-step__header conf-step__header_opened">
        <h2 className="conf-step__title">{header}</h2>
      </header>

      <div className="conf-step__wrapper">
        {children}
      </div>
    </section>
  );
}

DashboardBlock.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default DashboardBlock;
