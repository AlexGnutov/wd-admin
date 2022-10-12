import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {setHallConfigValues} from "../../../store/slices/config-slices/hall-config-slice";

function HallSelector(props) {
    const {hallsList} = useSelector(state => state.halls);
    const {activeHall} = useSelector((state) => state.hallConfig);
    const dispatch = useDispatch();

    const setActiveHall = (activeHall) => {
        dispatch(setHallConfigValues({
            activeHall,
            standardPrice: activeHall.standardPrice,
            vipPrice: activeHall.vipPrice,
        }));
    }

    return (
        <ul className="conf-step__selectors-box">
            {
                hallsList.map((hall) =>
                    <li key={hall.id}>
                        <input
                            onChange={() => setActiveHall({...hall})}
                            type="radio"
                            className="conf-step__radio"
                            name={props.name}
                            value={hall.id}
                            checked={+hall.id === +activeHall.id}/>
                        <span className="conf-step__selector">{hall.title}</span>
                    </li>
                )
            }
        </ul>
    )
}

HallSelector.propTypes = {
    name: PropTypes.string,
}

export default HallSelector;




