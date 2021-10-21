import { Semester } from "./Components/Semester";
import "./Components/Welcome.css";
import { Welcome } from "./Components/Welcome";
import Course from "./Interfaces/Course";
import { Menu } from "./Components/Menu";
import React from "react";
import "./App.css";
import "./Components/Semester.css";
import "./Components/Menu.css";

function App(): JSX.Element {
    const Cisc108: Course = {
        name: "Cisc 108",
        credits: 3,
    };
    const Cisc181: Course = {
        name: "Cisc181",
        credits: 3,
        prereq: Cisc108,
    };
    const courses = [Cisc108, Cisc181];
    return (
        <div className="App">
            <Welcome />
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
                        <Semester year={1} season={"Fall"} courses={courses} />
                        <Semester year={2} season={"Fall"} courses={courses} />
                    </div>
                    <div className="col">
                        <Semester year={1} season={"Spring"} courses={courses} />
                        <Semester year={2} season={"Spring"} courses={courses} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;