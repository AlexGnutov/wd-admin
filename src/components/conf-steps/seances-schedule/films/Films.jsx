import poster from "../../../../i/poster.png";
import {useDispatch, useSelector} from "react-redux";
import {setPopupVisible} from "../../../../store/slices/popup-slice/popup-slice";
import {setSeanceFilm} from "../../../../store/slices/config-slices/seance-config-slice";

function Films() {
    const {filmsList} = useSelector(state => state.films);
    const dispatch = useDispatch();

    const createFilm = () => {
        dispatch(setPopupVisible({popupName: 'movieAddPopup'}));
    }

    // TODO: make film delete option
    /*
    const openFilmDeletePopup = (film) => {
        dispatch(setFilmToDelete(film));
        console.log('Film to delete', id);
    }
    */

    const setDragValue = (film) => {
        dispatch(setSeanceFilm(film));
    }

    return (
        <>
            <p className="conf-step__paragraph">
                <button
                    className="conf-step__button conf-step__button-accent"
                    onClick={createFilm}
                >Добавить фильм</button>
            </p>

            <div className="conf-step__movies">
                {filmsList.map((film) =>
                    <div
                        key={film.id}
                        className="conf-step__movie"
                        // TODO: make film delete option
                        // onClick={() => {openFilmDeletePopup(film)}}
                        onDragStart={() => setDragValue(film)}
                        draggable={true}
                    >
                        <img className="conf-step__movie-poster" alt={film['imageText']} src={poster} draggable={false}/>
                        <h3 className="conf-step__movie-title">{film.title}</h3>
                        <p className="conf-step__movie-duration">{film.duration} мин.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Films;