import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Menu.css";
import {Menu} from "./Components/Menu";
import "./Components/Semester.css";
import { Semester } from "./Components/Semester";

function App(): JSX.Element {
    return (
        <div className="App">
            <div className="container-fluid"> 
                <div className="row">
                    <header className="App-header">
                        <h1>UD CIS Scheduler</h1> 
                    </header>
                </div>
                <div className="row">
                    <div className="col-3">
                        <Menu />
                    </div>
                    <div className="col">
                        <Semester />
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default App;
