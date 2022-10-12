function DeleteSeancePopup() {
    return (
        <div className="popup">
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Снятие с сеанса
                            <a className="popup__dismiss" href="#">
                                <img src="i/close.png" alt="Закрыть"/>
                            </a>
                        </h2>

                    </div>
                    <div className="popup__wrapper">
                        <form action="вудуеу_hall" method="post" accept-charset="utf-8">
                            <p className="conf-step__paragraph">Вы действительно хотите снять с сеанса
                                фильм <span></span>?</p>
                            {/*!-- В span будет подставляться название фильма -->*/}
                            <div className="conf-step__buttons text-center">
                                <input type="submit" value="Удалить"
                                       className="conf-step__button conf-step__button-accent"/>
                                    <button className="conf-step__button conf-step__button-regular">Отменить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteSeancePopup;