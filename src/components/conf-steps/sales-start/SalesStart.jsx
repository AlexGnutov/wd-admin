import {useDispatch} from "react-redux";
import {clearAuth} from "../../../store/slices/auth-slice/auth-slice";
import {clearAuthTokenThunk} from "../../../store/thunks/auth-thunks";

function SalesStart() {
    const dispatch = useDispatch();

    const salesStart = () => {
        dispatch(clearAuthTokenThunk());
    }

    return (
        <section className="conf-step">
            <header className="conf-step__header conf-step__header_opened">
                <h2 className="conf-step__title">Открыть продажи</h2>
            </header>
            <div className="conf-step__wrapper text-center">
                <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
                <button
                    type="button"
                    className="conf-step__button conf-step__button-accent"
                    onClick={salesStart}
                >
                    (LOGOUT)Открыть продажу билетов
                </button>
            </div>
        </section>
    )
}

export default SalesStart;