import React from 'react';
import PropTypes from 'prop-types';

import './opened-for-sales.css';

export default function OpenedForSales(props) {
  const { opened } = props;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {opened
        ? <span className="opened-for-sales__opened">Продажи открыты</span>
        : <span className="opened-for-sales__closed">Продажи закрыты</span>}
    </>
  );
}

OpenedForSales.propTypes = {
  opened: PropTypes.bool.isRequired,
};
