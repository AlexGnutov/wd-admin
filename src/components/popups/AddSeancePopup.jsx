import {useDispatch, useSelector} from "react-redux";
import {clearPopupVisible} from "../../store/slices/popup-slice/popup-slice";
import PopupHeader from "./popup-header/PopupHeader";
import PopupContainer from "./popup-container/PopupContainer";
import {useState} from "react";
import PopupSubmitButton from "./popup-submit-button/PopupSubmitButton";
import PopupCancelButton from "./popup-cancel-button/PopupCancelButton";
import {checkAvailableTime} from "../../utils/seances-utils";
import {saveSeanceThunk} from "../../store/thunks/seances-thunks";
import {timeStringToMinutes} from "../../utils/time-utils";
import {setSeanceStartTime} from "../../store/slices/config-slices/seance-config-slice";
import PopupControlledInput from "./popup-controlled-input/PopupControlledInput";

function AddSeancePopup() {
    const {showtimeAddPopup} = useSelector(state => state.popup);
    const {seanceHall, seanceFilm, seanceStartTime} = useSelector(state => state.seanceConfig);
    const dispatch = useDispatch();

    const closePopup = () => {
        dispatch(clearPopupVisible({popupName: 'showtimeAddPopup'}))
    }

    const changeValue = (value) => {
        console.log(seanceStartTime);
        dispatch(setSeanceStartTime(value));
    }

    const saveSeance = (e) => {
        e.preventDefault();
        if (checkAvailableTime(seanceStartTime, seanceHall, seanceFilm)) {
            dispatch(saveSeanceThunk({
                startTime: timeStringToMinutes(seanceStartTime),
                hallId: seanceHall.id,
                filmId: seanceFilm.id,
            }));
            closePopup();
        } else {
            // TODO: add error INFO
            console.log('Seance can\'t be added');
        }
    }

    return (
        <PopupContainer
            active={showtimeAddPopup}
            header={<PopupHeader title={'Добавление сеанса'} onCloseClick={closePopup}/>}
        >
            {/*Popup content starts*/}
            <form onSubmit={saveSeance}>
                <label className="conf-step__label conf-step__label-fullsize" htmlFor="hallId">
                    Название зала
                    <input
                        className="conf-step__input"
                        name="hallId"
                        placeholder={seanceHall?.title}
                        disabled={true}
                    />
                </label>

                <label className="conf-step__label conf-step__label-fullsize" htmlFor="startTime">
                    Время начала
                    <input
                        onChange={(e) => changeValue(e.target.value) }
                        className="conf-step__input"
                        type="time"
                        min="06:00"
                        max="22:00"
                        value={seanceStartTime}
                        name="startTime"
                        required/>
                </label>

                <label className="conf-step__label conf-step__label-fullsize" htmlFor="filmTitle">
                    Название фильма
                    <input
                        className="conf-step__input"
                        type="text"
                        name="filmTitle"
                        placeholder={seanceFilm?.title}
                        disabled={true}
                    />
                </label>

                <div className="conf-step__buttons text-center">
                    <PopupSubmitButton buttonTitle={'Добавить'}/>
                    <PopupCancelButton onCancelClick={closePopup}/>
                </div>
            </form>
        </PopupContainer>
    )
}

export default AddSeancePopup;