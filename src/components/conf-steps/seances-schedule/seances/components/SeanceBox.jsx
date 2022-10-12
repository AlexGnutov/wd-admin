import {minutesToTimeString} from "../../../../../utils/time-utils";
import PropTypes from "prop-types";
import {calcSeanceBoxPosition, calcSeanceBoxWidth} from "../../../../../utils/seances-utils";

function SeanceBox(props) {
    const {seance} = props;
    const {title, duration} = seance['filmData'];

    const style = {
        width: calcSeanceBoxWidth(duration),
        backgroundColor: 'rgb(133, 255, 137)',
        left: calcSeanceBoxPosition(seance.startTime),
    }

    return (
        <div
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
