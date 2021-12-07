import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Menu.css";
import COURSES from "./Assets/courses.json";
import {Menu} from "./Components/Menu";
import "./Components/Semester.css";
import "./Components/Welcome.css";
import { Welcome } from "./Components/Welcome";
import Course from "./Interfaces/Course";
import "./App.css";
import "./Components/Semester.css";
import "./Components/Menu.css";
import { Table } from "./Components/Table";
function App(): JSX.Element {
    const [courseList,setCourseList]=useState(COURSES as Course[]);
    const defaultfallids:number[][]=[[0,14,15,20],[3,4,19,34],[7,8,10,33],[12,11,36,8]];
    const defaultspringids:number[][]=[[1,2,21,40],[5,9,18,35],[6,34,16,41],[13,43,42,45]];
    const defaultfall:Course[][]=[[],[],[],[]];
    const defaultspring:Course[][]=[[],[],[],[]];
    defaultfallids.map((nested,i)=>nested.map((n,c)=>{
        defaultfall[i][c]=courseList[n];
    }));
    defaultspringids.map((nested,i)=>nested.map((n,c)=>{
        defaultspring[i][c]=courseList[n];
    }));
    const [fallsemesters, setFallSemesters]=useState(defaultfall);
    const [springsemesters, setSpringSemesters]=useState(defaultspring);
    return (
        <div className="App">
            <Welcome />
            <div className="container-fluid">
                {/* header row */}
                <div className="row">
                    <header className="App-header">
                        <h1>UD CIS Scheduler</h1>
                    </header>
                </div>
                {/* rest of page row */}
                <div className="row">
                    {/* menu column */}
                    <div className="col-2">
                        <h3>Course list</h3>
                        <Menu courseList={courseList} setCourseList={setCourseList} />
                    </div>
                    {/* rightside of page column */}
                    <Table fallsemesters={fallsemesters}
                        springsemesters={springsemesters}
                        courseList={courseList}
                        defaultfall={defaultfall}
                        defaultspring={defaultspring}
                        setCourseList={setCourseList}
                        setFallSemesters={setFallSemesters}
                        setSpringSemesters={setSpringSemesters}/>
                </div>
            </div>
        </div>
    );
}

export default App;
