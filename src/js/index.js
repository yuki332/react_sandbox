import React from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";
import Game from "./components/Game/Game";

const App = () => {
    return <div>
        <h1 className={style.test}>Welcome! This is React Sandbox</h1>
        <Game />
    </div>
};

ReactDOM.render(<App />, document.getElementById('app'));