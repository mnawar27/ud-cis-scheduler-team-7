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
//comment to force a commit
function App(): JSX.Element {
    const [currentCourses, setCurrentCourses] = useState([COURSES[0],COURSES[1],COURSES[2],COURSES[3]]as Course[]);
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
                        <Semester 
                            year = {1}
                            season = {"Fall"} 
                            courses = {currentCourses}
                            setCurrentCourses={setCurrentCourses}/>

                        <Semester 
                            year={2} 
                            season={"Fall"} 
                            courses={currentCourses}
                            setCurrentCourses={setCurrentCourses}/>
                        <Semester 
                            year={3} 
                            season={"Fall"} 
                            courses={currentCourses}
                            setCurrentCourses={setCurrentCourses}/>
                        <Semester 
                            year={4} 
                            season={"Fall"} 
                            courses={currentCourses}
                            setCurrentCourses={setCurrentCourses}/>
                        <div className="row">
                            {/*  <ControlPanel
                               setCourse={setCurrentCourses}/>*/}
                        </div>
                    </div>
                    <div className="col">
                        <Semester 
                            year={1} 
                            season={"Spring"} 
                            courses={currentCourses}
                            setCurrentCourses={setCurrentCourses} />
                        <Semester 
                            year={2} 
                            season={"Spring"} 
                            courses={currentCourses}
                            setCurrentCourses={setCurrentCourses} />
                        <Semester 
                            year={3} 
                            season={"Spring"} 
                            courses={currentCourses}
                            setCurrentCourses={setCurrentCourses} />
                        <Semester 
                            year={4} 
                            season={"Spring"} 
                            courses={currentCourses}
                            setCurrentCourses={setCurrentCourses} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
// commment to force a commit