import DashboardBlock from "../../common/conf-step/DashboardBlock";

import Films from "./films/Films";
import Seances from "./seances/Seances";

function SeancesSchedule() {
    return (
        <DashboardBlock header={'Сетка сеансов'}>
            <Films/>
            <Seances/>
            <fieldset className="conf-step__buttons text-center">
                <button className="conf-step__button conf-step__button-regular">Отмена</button>
                <input type="submit" value="Сохранить"
                       className="conf-step__button conf-step__button-accent"/>
            </fieldset>
        </DashboardBlock>
    )
}

export default SeancesSchedule;