import './App.css';
import IndexPage from "./pages/index-page/IndexPage";
import "./css/normalize.css";
import "./css/styles.scss";
import LoginPage from "./pages/login-page/LoginPage";
import React from "react";
import {useSelector} from "react-redux";

function App() {
    const {auth} = useSelector((state) => state.auth);

    return (
        <>
            {auth ? <IndexPage/> : <LoginPage/>}
        </>
    )
}

export default App;
