import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAuthTokenThunk } from '../../../store/thunks/auth-thunks';
import { openHallsForSalesThunk } from '../../../store/thunks/halls-thunks';

function SalesStart() {
  const dispatch = useDispatch();

  const startSales = () => {
    dispatch(openHallsForSalesThunk());
  };

  const logout = () => {
    dispatch(clearAuthTokenThunk());
  };

  return (
    <section className="conf-step">
      <header className="conf-step__header conf-step__header_opened">
        <h2 className="conf-step__title">Открыть продажи</h2>
      </header>
      <div className="conf-step__wrapper text-center">
        <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
        <button
          type="button"
          className="conf-step__button conf-step__button-accent"
          onClick={startSales}
        >
          Открыть продажу билетов
        </button>
        <button
          type="button"
          className="conf-step__button conf-step__button-accent"
          onClick={logout}
        >
          Выйти из системы
        </button>

      </div>
    </section>
  );
}

export default SalesStart;
