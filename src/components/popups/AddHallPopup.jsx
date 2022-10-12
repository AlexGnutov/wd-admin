import {useDispatch, useSelector} from "react-redux";
import {clearPopupVisible} from "../../store/slices/popup-slice/popup-slice";
import PopupHeader from "./popup-header/PopupHeader";
import {useState} from "react";
import PopupCancelButton from "./popup-cancel-button/PopupCancelButton";
import {createHallThunk} from "../../store/thunks/halls-thunks";
import PopupContainer from "./popup-container/PopupContainer";

const initialState = {
    title: '',
};

function AddHallPopup() {
    const {hallAddPopup} = useSelector(state => state.popup);
    const dispatch = useDispatch();

    const closePopup = () => {
        dispatch(clearPopupVisible({popupName: 'hallAddPopup'}))
    }

    const [hallData, setState] = useState(initialState);
    const onValueChange = (name, value) => {
        console.log(name, value);
        setState((state) => ({
            ...state,
            [name]: value,
        }))
    }

    const submitHallAdd = (e) => {
        e.preventDefault();
        dispatch(createHallThunk(hallData));
        setState(initialState);
        closePopup();
    }

    return (
        <PopupContainer
            active={hallAddPopup}
            header={<PopupHeader title='Добавление зала' onCloseClick={closePopup}/>}
        >
            {/*Popup content starts*/}
            <form onSubmit={submitHallAdd}>
                <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                    Название зала
                    <input
                        value={hallData.title}
                        onChange={(e) => onValueChange(e.target.name, e.target.value)}
                        className="conf-step__input"
                        type="text" placeholder="Например: Зал 1"
                        name="title"
                        required
                    />
                </label>
                <div className="conf-step__buttons text-center">
                    <button type="submit" className="conf-step__button conf-step__button-accent">
                        Добавить зал
                    </button>
                    <PopupCancelButton onCancelClick={closePopup}/>
                </div>
            </form>
        </PopupContainer>
    )
}

export default AddHallPopup;