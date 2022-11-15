import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../components/common/header/Header';
import { requestAuthTokenThunk } from '../../store/thunks/auth-thunks';

function LoginPage() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const changeValue = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      ...state,
    };
    dispatch(requestAuthTokenThunk(userData));
  };

  return (
    <>
      <Header />
      <main>
        <section className="login">
          <header className="login__header">
            <h2 className="login__title">Авторизация</h2>
          </header>
          <div className="login__wrapper">
            <form className="login__form" onSubmit={loginFormSubmit}>
              <label className="login__label" htmlFor="mail">
                E-mail
                <input
                  className="login__input"
                  type="mail"
                  placeholder="example@domain.xyz"
                  name="email"
                  value={state.email}
                  onChange={(e) => changeValue('email', e.target.value)}
                  required
                />
              </label>
              <label className="login__label" htmlFor="password">
                Пароль
                <input
                  className="login__input"
                  type="password"
                  placeholder=""
                  name="password"
                  value={state.password}
                  onChange={(e) => changeValue('password', e.target.value)}
                  required
                />
              </label>
              <div className="text-center">
                <input value="Авторизоваться" type="submit" className="login__button" />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default LoginPage;
