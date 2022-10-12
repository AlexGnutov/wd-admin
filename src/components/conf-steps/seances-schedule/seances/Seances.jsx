import {useSelector} from "react-redux";
import SeancesTimeline from "./components/SeancesTimeline";

function Seances() {
    const {hallsList} = useSelector(state => state.halls);

    return (
        <>
            <div className="conf-step__seances">
                {hallsList.map((hall, id) =>
                    <SeancesTimeline key={id} hall={hall}/>
                )}
            </div>
        </>
    )
}

export default Seances;