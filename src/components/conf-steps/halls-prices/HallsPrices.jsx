import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardBlock from '../../common/conf-step/DashboardBlock';
import HallSelector from '../../common/hall-selector/HallSelector';
import { setHallConfigValues } from '../../../store/slices/config-slices/hall-config-slice';
import { updateHallThunk } from '../../../store/thunks/halls-thunks';
import ActionButton from '../../common/action-button/ActionButton';
import UndoButton from '../../common/undo-button/UndoButton';

function HallsPrices() {
  const { standardPrice, vipPrice, activeHall } = useSelector((state) => state.hallConfig);
  const dispatch = useDispatch();

  const changePrice = (name, value) => {
    dispatch(setHallConfigValues({
      [name]: value,
    }));
  };

  const undoChanges = () => {

  };

  const saveNewPrices = () => {
    dispatch(updateHallThunk({
      data: {
        standardPrice,
        vipPrice,
      },
      id: activeHall.id,
    }));
  };

  return (
    <DashboardBlock header="Конфигурация цен">
      <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
      <HallSelector name="halls-prices" />
      <p className="conf-step__paragraph">Установите цены для типов кресел:</p>

      <div className="conf-step__legend">
        <label className="conf-step__label" htmlFor="standardPrice">
          Цена, рублей
          <input
            type="text"
            name="standardPrice"
            onChange={(e) => changePrice('standardPrice', e.target.value)}
            className="conf-step__input"
            value={standardPrice}
          />
        </label>
        за
        {' '}
        <span className="conf-step__chair conf-step__chair_standart" />
        {' '}
        обычные кресла
      </div>

      <div className="conf-step__legend">
        <label className="conf-step__label" htmlFor="vipPrice">
          Цена, рублей
          <input
            type="text"
            name="vipPrice"
            onChange={(e) => changePrice('vipPrice', e.target.value)}
            className="conf-step__input"
            value={vipPrice}
          />
        </label>
        за
        {' '}
        <span className="conf-step__chair conf-step__chair_vip" />
        {' '}
        VIP кресла
      </div>

      <fieldset className="conf-step__buttons text-center">
        <UndoButton title="Отмена" onClick={undoChanges} />
        <ActionButton title="Сохранить" onClick={saveNewPrices} />
      </fieldset>
    </DashboardBlock>
  );
}

export default HallsPrices;
