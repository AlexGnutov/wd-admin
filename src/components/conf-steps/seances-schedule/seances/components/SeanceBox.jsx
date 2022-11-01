import {minutesToTimeString} from "../../../../../utils/time-utils";
import PropTypes from "prop-types";
import {calcSeanceBoxPosition, calcSeanceBoxWidth} from "../../../../../utils/seances-utils";
import {useDispatch} from "react-redux";
import {setSeanceToDelete} from "../../../../../store/slices/delete-items-slice";
import {setPopupVisible} from "../../../../../store/slices/popup-slice/popup-slice";

function SeanceBox(props) {
    const {seance} = props;
    const {title, duration} = seance['filmData'];
    const dispatch = useDispatch();

    const style = {
        width: calcSeanceBoxWidth(duration),
        backgroundColor: 'rgb(133, 255, 137)',
        left: calcSeanceBoxPosition(seance.startTime),
    }

    const openSeanceDeletePopup = (seance) => {
        dispatch(setSeanceToDelete(seance));
        dispatch(setPopupVisible({popupName: 'seanceDeletePopup'}));
    }

    return (
        <div
            onClick={() => openSeanceDeletePopup(seance)}
            key={seance.id}
            className="conf-step__seances-movie"
            style={style}
        >
            <p className="conf-step__seances-movie-title">
                {title}
            </p>
            <p className="conf-step__seances-movie-start">
                {minutesToTimeString(seance.startTime)}
            </p>
        </div>
    )
}

SeanceBox.propTypes = {
    seance: PropTypes.object,
}

export default SeanceBox;
