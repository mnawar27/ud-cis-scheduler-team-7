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
import Course from "./Interfaces/Course";
import "./App.css";
import "./Components/Semester.css";
import "./Components/Menu.css";
function App(): JSX.Element {
    const [currentCourses, setCurrentCourses] = useState([COURSES[0],COURSES[1],COURSES[2],COURSES[3]]as Course[]);
    const [fallsemesters, setFallSemesters]=useState([1,2,3,4]);
    const [springsemesters, setSpringSemesters]=useState([1,2,3,4]);
    function useForceUpdate(){
        const [value,setValue] = useState(0); // integer state
        value;
        return () => setValue(value => value + 1); // update the state to force render
    }
    function addFallSemester(semesters: number[]){
        const i: number = semesters.length;
        setFallSemesters([...semesters,i+1]);
    }
    function addSpringSemester(semesters: number[]){
        const i: number = semesters.length;
        setSpringSemesters([...semesters,i+1]);
    }
    function removeFallSemester(semesters: number[]){
        const copy: number[] = [...semesters];
        copy.splice(semesters.length-1,1);
        setFallSemesters(copy);
    }
    function removeSpringSemester(semesters: number[]){
        const copy: number[] = [...semesters];
        copy.splice(semesters.length-1,1);
        setSpringSemesters(copy);
    }
    function clearSemester(fsemesters: number[], ssemesters: number[]){
        const fcopy: number[] = [...fsemesters];
        const scopy: number[] = [...ssemesters];
        fcopy.splice(0,fsemesters.length);
        scopy.splice(0,ssemesters.length);
        setFallSemesters(fcopy);
        setSpringSemesters(scopy);
    }
    function setDefault(){
        setFallSemesters([1,2,3,4]);
        setSpringSemesters([1,2,3,4]);
    }
    return (
        <div className="App">
            <Welcome />
            <div className="container-fluid">
                <div className="row">
                    <header className="App-header">
                        <h1>UD CIS Scheduler <button onClick={useForceUpdate()}>Update courses</button></h1>
                    </header>
                </div>
                <div className="row">
                    <div className="col-3">
                        <Menu />
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-light btn-sm" onClick={()=>clearSemester(fallsemesters,springsemesters)}>Clear all semesters</button>
                            </div>
                        </div>
                        <button className="btn btn-light btn-sm" onClick={()=>addFallSemester(fallsemesters)}>Add fall semester</button>
                        <button className="btn btn-light btn-sm" onClick={()=>removeFallSemester(fallsemesters)}>Remove last fall semester</button>
                        {fallsemesters.map((i)=>{
                            return(
                                <Semester key = {i}
                                    year = {i}
                                    season = {"Fall"} 
                                    courses = {currentCourses}
                                    setCurrentCourses={setCurrentCourses}/>);
                        })}
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-light btn-sm" onClick={()=>setDefault()}>Set default plan</button>
                            </div>
                        </div>
                        <button className="btn btn-light btn-sm" onClick={()=>addSpringSemester(springsemesters)}>Add spring semester</button>
                        <button className="btn btn-light btn-sm" onClick={()=>removeSpringSemester(springsemesters)}>Remove last spring semester</button>
                        {springsemesters.map((i)=>{
                            return(
                                <Semester key = {i}
                                    year = {i}
                                    season = {"Spring"} 
                                    courses = {currentCourses}
                                    setCurrentCourses = {setCurrentCourses}/>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
