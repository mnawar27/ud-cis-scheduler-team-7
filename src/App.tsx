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
    const defaultfall:Course[][]=[[COURSES[0],COURSES[14],COURSES[15],COURSES[20]],[COURSES[3],COURSES[4],COURSES[19],COURSES[34]],[COURSES[7],COURSES[8],COURSES[10],COURSES[33]],[COURSES[12],COURSES[11],COURSES[36],COURSES[38]]];
    const defaultspring:Course[][]=[[COURSES[1],COURSES[2],COURSES[21],COURSES[40]],[COURSES[5],COURSES[9],COURSES[18],COURSES[35]],[COURSES[6],COURSES[11],COURSES[16],COURSES[41]],[COURSES[13],COURSES[43],COURSES[42],COURSES[45]]];
    const [fallsemesters, setFallSemesters]=useState(defaultfall);
    const [springsemesters, setSpringSemesters]=useState(defaultspring);
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
    function clearSemester(){
        for(let i=0;i<COURSES.length;i++){
            COURSES[i].enrolled=false;
        }
        setClear(false);
        setFallSemesters([]);
        setSpringSemesters([]);
    }
    function setDefault(){
        defaultfall.map((semester)=>{
            semester.map((course)=>{
                course.enrolled=true;
            });
        });
        defaultspring.map((semester)=>{
            semester.map((course)=>{
                course.enrolled=true;
            });
        });
        setFallSemesters(defaultfall);
        setSpringSemesters(defaultspring);
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
                                    <button className="btn btn-light btn-sm" onClick={()=>clearSemester()}>Clear all semesters</button>:
                                    <button className="btn btn-light btn-sm" onClick={()=>setDefault()}>Set default plan</button>}
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
