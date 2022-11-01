import {useDispatch, useSelector} from "react-redux";
import {clearPopupVisible} from "../../store/slices/popup-slice/popup-slice";
import {setFilmToDelete} from "../../store/slices/delete-items-slice";
import PopupContainer from "./popup-container/PopupContainer";
import PopupHeader from "./popup-header/PopupHeader";
import PopupSubmitButton from "./popup-submit-button/PopupSubmitButton";
import PopupCancelButton from "./popup-cancel-button/PopupCancelButton";
import {deleteFilmThunk} from "../../store/thunks/films-thunks";


function DeleteFilmPopup() {
    const {filmDeletePopup} = useSelector(state => state.popup);
    const {filmToDelete} = useSelector(state => state.delete)
    const dispatch = useDispatch();

    const closePopup = () => {
        dispatch(clearPopupVisible({popupName: 'filmDeletePopup'}));
        dispatch(setFilmToDelete(null));
    }

    const deleteFilm = (e) => {
        e.preventDefault();
        if (filmToDelete) {
            dispatch(deleteFilmThunk(filmToDelete.id));
        }
    }

    return (
        <PopupContainer active={filmDeletePopup}
                        header={<PopupHeader title={'Удаление фильма'} onCloseClick={closePopup}/>}>

            {/*Popup content starts*/}
            <form onSubmit={deleteFilm}>
                <p className="conf-step__paragraph">
                    Вы действительно хотите удалить фильм
                    {filmToDelete ? <span> {`"${filmToDelete.title}"`}?</span> : null}
                </p>
                <div className="conf-step__buttons text-center">
                    <PopupSubmitButton buttonTitle={'Удалить'}/>
                    <PopupCancelButton onCancelClick={closePopup}/>
                </div>
            </form>
        </PopupContainer>
    )
}

export default DeleteFilmPopup;