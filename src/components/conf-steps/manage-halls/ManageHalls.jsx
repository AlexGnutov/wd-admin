import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardBlock from '../../common/conf-step/DashboardBlock';
import { setPopupVisible } from '../../../store/slices/popup-slice/popup-slice';
import ActionButton from '../../common/action-button/ActionButton';
import { setHallToDelete } from '../../../store/slices/delete-items-slice';
import OpenedForSales from './opened-for-sales/OpenedForSales';

export default function ManageHalls() {
  const { hallsList } = useSelector((state) => state.halls);
  const dispatch = useDispatch();

  const createHall = () => {
    dispatch(setPopupVisible({ popupName: 'hallAddPopup' }));
  };

  const openHallDeletePopup = (hall) => {
    dispatch(setHallToDelete(hall));
    dispatch(setPopupVisible({ popupName: 'hallDeletePopup' }));
  };

  return (
    <DashboardBlock header="Управление залами">
      <p className="conf-step__paragraph">Доступные залы:</p>
      <ul className="conf-step__list">
        {
                    hallsList.map((hall) => (
                      <li key={hall.id}>
                        {hall.title}
                        {' '}
                        {' '}
                        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                        <button
                          type="button"
                          className="conf-step__button conf-step__button-trash"
                          onClick={() => openHallDeletePopup(hall)}
                        />
                        {' '}
                        {' '}
                        <OpenedForSales opened={!!hall.openedForSales} />
                      </li>
                    ))
                }
      </ul>
      <ActionButton onClick={createHall} title="Создать зал" />
    </DashboardBlock>
  );
}
