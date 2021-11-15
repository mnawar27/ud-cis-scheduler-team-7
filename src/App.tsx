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
    const defaultfall:Course[]=[COURSES[0],COURSES[1],COURSES[2],COURSES[3]];
    const defaultspring:Course[]=[COURSES[0],COURSES[1],COURSES[2],COURSES[3]];
    const currentCourses = [COURSES[0],COURSES[1],COURSES[2],COURSES[3]]as Course[];
    const [fallsemesters, setFallSemesters]=useState([currentCourses,currentCourses,currentCourses,currentCourses]);
    const [springsemesters, setSpringSemesters]=useState([currentCourses,currentCourses,currentCourses,currentCourses]);
    const [clear,setClear]=useState(true);
    function useForceUpdate(){
        const [value,setValue] = useState(0); // integer state
        value;
        return () => setValue(value => value + 1); // update the state to force render
    }
    function addSemester(fsemesters:Course[][],ssemesters:Course[][],season:boolean){
        if(season==true){
            setFallSemesters([...fsemesters,[]]);
        }else{
            setSpringSemesters([...ssemesters,[]]);
        }
        setClear(true);
    }
    function removeSemester(fsemesters:Course[][],ssemesters:Course[][],season:boolean){
        let n:number;
        let copy:Course[][];
        if (season==true){
            copy=[...fsemesters];
            copy.splice(fsemesters.length-1,1);
            if(fsemesters.length>0){
                for(let i=0;i<fsemesters[fsemesters.length-1].length;i++){
                    n=fsemesters[fsemesters.length-1][i].id;
                    COURSES[n-1].enrolled=false;
                }
            }
            if(copy.length==0 && ssemesters.length==0){
                setClear(false);
            }
            setFallSemesters(copy);
        }else{
            copy=[...ssemesters];
            copy.splice(ssemesters.length-1,1);
            if(ssemesters.length>0){
                for(let i=0;i<ssemesters[ssemesters.length-1].length;i++){
                    n=ssemesters[ssemesters.length-1][i].id;
                    COURSES[n-1].enrolled=false;
                }
            }
            if(fsemesters.length==0 && copy.length==0){
                setClear(false);
            }
            setSpringSemesters(copy);
        }
    }
    function clearSemester(fsemesters: Course[][], ssemesters: Course[][]){
        const fcopy: Course[][] = [...fsemesters];
        const scopy: Course[][] = [...ssemesters];
        fcopy.splice(0,fsemesters.length);
        scopy.splice(0,ssemesters.length);
        for(let i=0;i<COURSES.length;i++){
            COURSES[i].enrolled=false;
        }
        setClear(false);
        setFallSemesters(fcopy);
        setSpringSemesters(scopy);
    }
    function setDefault(fsemesters:Course[][],ssemesters:Course[][]){
        const fcopy: Course[][] = [...fsemesters];
        const scopy: Course[][] = [...ssemesters];
        fcopy.splice(0,fsemesters.length);
        scopy.splice(0,ssemesters.length);
        setFallSemesters([defaultfall,defaultfall,defaultfall,defaultfall]);
        setSpringSemesters([defaultspring,defaultspring,defaultspring,defaultspring]);
        setClear(true);
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
                                {clear?
                                    <button className="btn btn-light btn-sm" onClick={()=>clearSemester(fallsemesters,springsemesters)}>Clear all semesters</button>:
                                    <button className="btn btn-light btn-sm" onClick={()=>setDefault(fallsemesters,springsemesters)}>Set default plan</button>}
                            </div>
                        </div>
                        <button className="btn btn-light btn-sm" onClick={()=>addSemester(fallsemesters,springsemesters,true)}>Add fall semester</button>
                        <button className="btn btn-light btn-sm" onClick={()=>removeSemester(fallsemesters,springsemesters,true)}>Remove last fall semester</button>
                        {fallsemesters.map((Courses,i)=>{
                            return(
                                <Semester key = {i}
                                    year={i+1}
                                    season = {"Fall"} 
                                    courses = {Courses}
                                />);
                        })}
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-light btn-sm">Save plan</button>
                                <button className="btn btn-light btn-sm">Load plan</button>
                            </div>
                        </div>
                        <button className="btn btn-light btn-sm" onClick={()=>addSemester(fallsemesters,springsemesters,false)}>Add spring semester</button>
                        <button className="btn btn-light btn-sm" onClick={()=>removeSemester(fallsemesters,springsemesters,false)}>Remove last spring semester</button>
                        {springsemesters.map((Courses,i)=>{
                            return(
                                <Semester key = {i}
                                    year = {i+1}
                                    season = {"Spring"} 
                                    courses = {Courses}
                                />);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
