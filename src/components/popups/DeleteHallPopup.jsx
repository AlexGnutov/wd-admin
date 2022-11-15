import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopupSubmitButton from './popup-submit-button/PopupSubmitButton';
import PopupCancelButton from './popup-cancel-button/PopupCancelButton';
import { clearPopupVisible } from '../../store/slices/popup-slice/popup-slice';
import PopupHeader from './popup-header/PopupHeader';
import PopupContainer from './popup-container/PopupContainer';
import { deleteHallThunk } from '../../store/thunks/halls-thunks';
import { setHallToDelete } from '../../store/slices/delete-items-slice';

function DeleteHallPopup() {
  const { hallDeletePopup } = useSelector((state) => state.popup);
  const { hallToDelete } = useSelector((state) => state.delete);
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(clearPopupVisible({ popupName: 'hallDeletePopup' }));
    dispatch(setHallToDelete(null));
  };

  const deleteHall = (e) => {
    e.preventDefault();
    if (hallToDelete) {
      dispatch(deleteHallThunk(hallToDelete.id));
    }
  };

  return (
    <PopupContainer
      active={hallDeletePopup}
      header={<PopupHeader title="Удаление зала" onCloseClick={closePopup} />}
    >

      {/* Popup content starts */}
      <form onSubmit={deleteHall}>
        <p className="conf-step__paragraph">
          Вы действительно хотите удалить зал
          {hallToDelete ? (
            <span>
              {' '}
              {`"${hallToDelete.title}"`}
              ?
            </span>
          ) : null}
        </p>
        <div className="conf-step__buttons text-center">
          <PopupSubmitButton buttonTitle="Удалить" />
          <PopupCancelButton onCancelClick={closePopup} />
        </div>
      </form>

    </PopupContainer>
  );
}

export default DeleteHallPopup;
