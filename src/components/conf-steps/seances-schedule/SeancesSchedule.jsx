import DashboardBlock from "../../common/conf-step/DashboardBlock";

import Films from "./films/Films";
import Seances from "./seances/Seances";

function SeancesSchedule() {
    return (
        <DashboardBlock header={'Сетка сеансов'}>
            <Films/>
            <Seances/>
        </DashboardBlock>
    )
}

export default SeancesSchedule;