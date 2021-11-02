import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Menu.css";
import COURSES from "./Assets/courses.json";
import {Menu} from "./Components/Menu";
import "./Components/Semester.css";
import { Semester } from "./Components/Semester";
import "./Components/Welcome.css";
import { Welcome } from "./Components/Welcome";
import { ControlPanel } from "./Components/ControlPanel";
import Course from "./Interfaces/Course";
import "./App.css";
import "./Components/Semester.css";
import "./Components/Menu.css";
function App(): JSX.Element {
    const [currentCourses, setCurrentCourses] = useState([COURSES[0],COURSES[1],COURSES[2],COURSES[3]]as Course[]);
    const [fallsemesters, setFallSemesters]=useState([1,2,3,4]);
    const [springsemesters, setSpringSemesters]=useState([1,2,3,4]);
    function addFallSemester(semesters:number[]){
        const i:number=semesters.length;
        setFallSemesters([...semesters,i+1]);
    }
    function addSpringSemester(semesters:number[]){
        const i:number=semesters.length;
        setSpringSemesters([...semesters,i+1]);
    }

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
                        <button className="btn btn-light btn-sm" onClick={()=>addFallSemester(fallsemesters)}>Add fall Semester</button>
                        {fallsemesters.map((i)=>{
                            return(
                                <Semester key={i}
                                    year = {i}
                                    season = {"Fall"} 
                                    courses = {currentCourses}
                                    setCurrentCourses={setCurrentCourses}/>);
                        })}
                        <div className="row">
                            <ControlPanel
                                setCourse={setCurrentCourses}/>
                        </div>
                    </div>
                    <div className="col">
                        <button className="btn btn-light btn-sm" onClick={()=>addSpringSemester(springsemesters)}>Add Spring Semester</button>
                        {springsemesters.map((i)=>{
                            return(
                                <Semester key={i}
                                    year = {i}
                                    season = {"Fall"} 
                                    courses = {currentCourses}
                                    setCurrentCourses={setCurrentCourses}/>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
