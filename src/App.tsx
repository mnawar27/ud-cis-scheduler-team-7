import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Semester } from "./Components/Semester";
import "./Components/Semester.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">

                <h1>UD CIS Scheduler</h1> 
                <Semester ></Semester>
                

            </header>
        </div>
    );
}

export default App;
