import React from "react";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Semester } from "./Components/Semester";
import "./Components/Semester.css";
import Course from "./Interfaces/Course";

function App(): JSX.Element {
    const Cisc108 : Course ={
        name:"Cisc 108",
        credits:3,
    };
    const Cisc181 : Course ={
        name:"Cisc181",
        credits:3,
        prereq:Cisc108,
    };
    const courses=[Cisc108,Cisc181];
    return (
        <div className="App">
            <header className="App-header">

                <h1>UD CIS Scheduler</h1> 
                <div className="rowC">
                    <Semester year={1} season={"Fall"} courses={courses}></Semester>
                    <Semester year={1} season={"Spring"} courses={courses}></Semester>
                </div>
                <div className="rowC">
                    <Semester year={2} season={"Fall"} courses={courses}></Semester>
                    <Semester year={2} season={"Spring"} courses={courses}></Semester>
                </div>
                
            </header>
            
        </div>
    );
}

export default App;
