import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopupHeader from './popup-header/PopupHeader';
import PopupCancelButton from './popup-cancel-button/PopupCancelButton';
import { clearPopupVisible } from '../../store/slices/popup-slice/popup-slice';
import { saveFilmThunk } from '../../store/thunks/films-thunks';
import PopupControlledInput from './popup-controlled-input/PopupControlledInput';
import PopupSubmitButton from './popup-submit-button/PopupSubmitButton';
import PopupContainer from './popup-container/PopupContainer';

const initialState = {
  title: '',
  synopsis: '',
  duration: 60,
  origin: '',
  imageText: '',
};

function AddFilmPopup() {
  const { filmAddPopup } = useSelector((state) => state.popup);
  const dispatch = useDispatch();
  const fileRef = useRef();

  const closePopup = () => {
    dispatch(clearPopupVisible({ popupName: 'filmAddPopup' }));
  };

  const [filmData, setFilmData] = useState(initialState);
  const onValueChange = (name, value) => {
    setFilmData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const addFilm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(filmData).forEach((key) => {
      formData.append(key, filmData[key]);
    });

    formData.append('imageFile', fileRef.current?.files[0]);
    dispatch(saveFilmThunk(formData));
    setFilmData(initialState);
    closePopup();
  };

  return (
    <PopupContainer
      active={filmAddPopup}
      header={<PopupHeader title="Добавление фильма" onCloseClick={closePopup} />}
    >
      {/* Popup content starts here */}
      <form onSubmit={addFilm}>
        <PopupControlledInput
          value={filmData.title}
          name="title"
          label="Название фильма"
          type="text"
          onChange={onValueChange}
          disabled={false}
          placeholder=""
        />
        <PopupControlledInput
          value={filmData.synopsis}
          name="synopsis"
          label="Краткое описание"
          type="text"
          onChange={onValueChange}
          disabled={false}
          placeholder=""
        />
        <label className="conf-step__label conf-step__label-fullsize" htmlFor="title">
          Длительность, мин.
          <input
            value={filmData.duration}
            onChange={(e) => onValueChange(e.target.name, e.target.value)}
            className="conf-step__input"
            type="number"
            min={30}
            max={240}
            step={10}
            name="duration"
            required
          />
        </label>
        <PopupControlledInput
          value={filmData.origin}
          name="origin"
          label="Страна"
          type="text"
          onChange={onValueChange}
          disabled={false}
          placeholder=""
        />
        <PopupControlledInput
          value={filmData.imageText}
          name="imageText"
          label="Текст к изображению"
          type="text"
          onChange={onValueChange}
          disabled={false}
          placeholder=""
        />
        <label className="conf-step__label conf-step__label-fullsize" htmlFor="title">
          Постер к фильму
          <input
            accept=".png, .jpg, .jpeg"
            className="conf-step__input"
            type="file"
            name="imageFile"
            required
            ref={fileRef}
          />
        </label>
        <div className="conf-step__buttons text-center">
          <PopupSubmitButton buttonTitle="Добавить фильм" />
          <PopupCancelButton onCancelClick={closePopup} />
        </div>
      </form>
    </PopupContainer>
  );
}

export default AddFilmPopup;
