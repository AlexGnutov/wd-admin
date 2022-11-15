import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopupVisible } from '../../../../store/slices/popup-slice/popup-slice';
import { setSeanceFilm } from '../../../../store/slices/config-slices/seance-config-slice';
import { setFilmToDelete } from '../../../../store/slices/delete-items-slice';

const filmImagesRoot = process.env.REACT_APP_BASE_URL || window.location;

function Films() {
  const { filmsList } = useSelector((state) => state.films);
  const dispatch = useDispatch();

  const createFilm = () => {
    dispatch(setPopupVisible({ popupName: 'filmAddPopup' }));
  };

  const openFilmDeletePopup = (film) => {
    dispatch(setFilmToDelete(film));
    dispatch(setPopupVisible({ popupName: 'filmDeletePopup' }));
  };

  const setDragValue = (film) => {
    dispatch(setSeanceFilm(film));
  };

  return (
    <>
      <p className="conf-step__paragraph">
        <button
          type="button"
          className="conf-step__button conf-step__button-accent"
          onClick={createFilm}
        >
          Добавить фильм
        </button>
      </p>

      <div className="conf-step__movies">
        {filmsList.map((film) => (
          <div
            key={film.id}
            className="conf-step__movie"
            onClick={() => { openFilmDeletePopup(film); }}
            onDragStart={() => setDragValue(film)}
            draggable
          >
            <img
              className="conf-step__movie-poster"
              alt={film.imageText}
              src={filmImagesRoot + process.env.REACT_APP_IMAGES + film.imageFileName}
              draggable={false}
            />
            <h3 className="conf-step__movie-title">{film.title}</h3>
            <p className="conf-step__movie-duration">
              {film.duration}
              {' '}
              мин.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Films;
