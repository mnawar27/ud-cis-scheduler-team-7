import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Semester } from "./Components/Semester";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler
                <Semester></Semester>
                <p>Maisha Nawar</p>
                <p>Jakob Wolf</p>
                <p>Macy Beach</p> 

                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
