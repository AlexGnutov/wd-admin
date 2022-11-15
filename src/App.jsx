import React from 'react';
import { useSelector } from 'react-redux';
import IndexPage from './pages/index-page/IndexPage';
import LoginPage from './pages/login-page/LoginPage';
import './App.css';
import './css/normalize.css';
import './css/styles.scss';

function App() {
  const { auth } = useSelector((state) => state.auth);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {auth ? <IndexPage /> : <LoginPage />}
    </>
  );
}

export default App;
