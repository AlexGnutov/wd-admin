import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import SeanceBox from "./SeanceBox";
import {setPopupVisible} from "../../../../../store/slices/popup-slice/popup-slice";
import {setSeanceHall} from "../../../../../store/slices/config-slices/seance-config-slice";

function SeancesTimeline(props) {
    const {hall} = props;

    const {seancesList} = useSelector(state => state.seances);
    const dispatch = useDispatch();

    const onFilmDrop = (hall) => {
        dispatch(setSeanceHall(hall));
        dispatch(setPopupVisible({popupName: 'showtimeAddPopup'}));
    }

    return (
        <div className="conf-step__seances-hall">
            <h3 className="conf-step__seances-title">{hall.title}</h3>
            <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => onFilmDrop(hall)}
                className="conf-step__seances-timeline">
                {seancesList.filter((seance) => +seance['hallId'] === +hall.id)
                    .map((seance) =>
                        <SeanceBox key={seance.id} seance={seance}/>
                    )
                }
            </div>
        </div>
    )
}

SeancesTimeline.propTypes = {
    hall: PropTypes.object,
}

export default SeancesTimeline;
