import {useDispatch, useSelector} from "react-redux";
import {clearPopupVisible} from "../../store/slices/popup-slice/popup-slice";
import {setSeanceToDelete} from "../../store/slices/delete-items-slice";
import PopupContainer from "./popup-container/PopupContainer";
import PopupHeader from "./popup-header/PopupHeader";
import PopupSubmitButton from "./popup-submit-button/PopupSubmitButton";
import PopupCancelButton from "./popup-cancel-button/PopupCancelButton";
import {deleteSeanceThunk} from "../../store/thunks/seances-thunks";

function DeleteSeancePopup() {
    const {seanceDeletePopup} = useSelector(state => state.popup);
    const {seanceToDelete} = useSelector(state => state.delete)
    const dispatch = useDispatch();

    const closePopup = () => {
        dispatch(clearPopupVisible({popupName: 'seanceDeletePopup'}));
        dispatch(setSeanceToDelete(null));
    }

    const deleteSeance = (e) => {
        e.preventDefault();
        if (seanceToDelete) {
            dispatch(deleteSeanceThunk(seanceToDelete.id));
        }
    }

    return (
        <PopupContainer active={seanceDeletePopup}
                        header={<PopupHeader title={'Удаление сеанса'} onCloseClick={closePopup}/>}>

            {/*Popup content starts*/}
            <form onSubmit={deleteSeance}>
                <p className="conf-step__paragraph">
                    Вы действительно хотите удалить сеанс
                    {seanceToDelete ? <span> {`"${seanceToDelete.id}"`}?</span> : null}
                </p>
                <div className="conf-step__buttons text-center">
                    <PopupSubmitButton buttonTitle={'Удалить'}/>
                    <PopupCancelButton onCancelClick={closePopup}/>
                </div>
            </form>
        </PopupContainer>
    )
}

export default DeleteSeancePopup;