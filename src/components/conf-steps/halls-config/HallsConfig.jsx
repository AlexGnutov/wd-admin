import DashboardBlock from "../../common/conf-step/DashboardBlock";
import HallSelector from "../../common/hall-selector/HallSelector";
import {useDispatch, useSelector} from "react-redux";
import {changeSeatType, generateSeatsArray} from "../../../utils/seats-utils";
import Chair from "../../common/chair/Chair";
import ActionButton from "../../common/action-button/ActionButton";
import {setHallConfigValues} from "../../../store/slices/config-slices/hall-config-slice";
import {useEffect} from "react";
import {getHallSeatsData} from "../../../utils/hall-config-utils";
import {updateHallThunk} from "../../../store/thunks/halls-thunks";
import UndoButton from "../../common/undo-button/UndoButton";

function HallsConfig() {
    const {rows, seatsPerRow, seats, activeHall} = useSelector((state) => state.hallConfig);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHallConfigValues(getHallSeatsData(activeHall)));
    }, [activeHall, dispatch]);

    const changeRows = (value) => {
        dispatch(setHallConfigValues({
            rows: value,
            seats: generateSeatsArray(value, seatsPerRow),
        }));
    }
    const changeSeatsPerRow = (value) => {
        dispatch(setHallConfigValues({
            seatsPerRow: value,
            seats: generateSeatsArray(rows, value),
        }));
    }

    const undoChanges = () => {
        dispatch(setHallConfigValues(getHallSeatsData(activeHall)));
    }

    const chairClick = (row, column) => {
        const updatedSeats = changeSeatType(row, column, seats);
        dispatch(setHallConfigValues({seats: updatedSeats}));
    }

    const saveHallConfiguration = () => {
        dispatch(updateHallThunk({
            data: {
                seats: JSON.stringify(seats),
            },
            id: activeHall.id,
        }));
    }

    //TODO: Добавить модификацию кресел
    //TODO: Добавить отмену
    //TODO: Добавить сохранение

    return (
        <DashboardBlock header={'Конфигурация залов'}>
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <HallSelector name={'halls-config'}/>

            <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</p>
            <div className="conf-step__legend">
                <label className="conf-step__label">
                    Рядов, шт
                    <input
                        name="rows"
                        type="number"
                        min={1}
                        max={20}
                        className="conf-step__input"
                        onChange={(e) => changeRows(+e.target.value)}
                        value={rows}
                    />
                </label>
                <span className="multiplier">x</span>
                <label className="conf-step__label">
                    Мест, шт
                    <input
                        name="seatsPerRow"
                        type="number"
                        min={1}
                        max={20}
                        className="conf-step__input"
                        onChange={(e) => changeSeatsPerRow(+e.target.value)}
                        value={seatsPerRow}
                    />
                </label>
            </div>

            <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
            <div className="conf-step__legend">
                <Chair type={'s'}/> — обычные кресла
                <Chair type={'v'}/> — VIP кресла
                <Chair type={'d'}/> — заблокированные (нет кресла)
                <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
            </div>

            <div className="conf-step__hall">
                <div className="conf-step__hall-wrapper">
                    {seats.map((row, rowId) =>
                        <div key={rowId} className="conf-step__row">
                            {row.map((seat, colId) =>
                                <Chair
                                    onClick={() => chairClick(rowId, colId)}
                                    key={rowId + '-' + colId}
                                    type={seat}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>

            <fieldset className="conf-step__buttons text-center">
                <UndoButton onClick={undoChanges} title={'Отмена'}/>
                <ActionButton title={'Сохранить'} onClick={saveHallConfiguration}/>
            </fieldset>
        </DashboardBlock>
    )
}

export default HallsConfig;