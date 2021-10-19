import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Semester } from "./Components/Semester";
import "./Components/Semester.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">


                <h1>UD CIS Scheduler</h1>
            </header>
            <Semester></Semester>
        </div>
    );
}

export default App;
