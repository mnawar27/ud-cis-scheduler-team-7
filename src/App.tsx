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
    const [courseList,setCourseList]=useState(COURSES as Course[]);
    const defaultfall:Course[][]=[[courseList[0],courseList[14],courseList[15],courseList[20]],[courseList[3],courseList[4],courseList[19],courseList[34]],[courseList[7],courseList[8],courseList[10],courseList[33]],[courseList[12],courseList[11],courseList[36],courseList[38]]];
    const defaultspring:Course[][]=[[courseList[1],courseList[2],courseList[21],courseList[40]],[courseList[5],courseList[9],courseList[18],courseList[35]],[courseList[6],courseList[34],courseList[16],courseList[41]],[courseList[13],courseList[43],courseList[42],courseList[45]]];
    const [fallsemesters, setFallSemesters]=useState(defaultfall);
    const [springsemesters, setSpringSemesters]=useState(defaultspring);
    const [clear,setClear]=useState(true);
    function addSemester(fsemesters:Course[][],ssemesters:Course[][],season:string){
        if(season=="fall"){
            setFallSemesters([...fsemesters,[]]);
        }else{
            setSpringSemesters([...ssemesters,[]]);
        }
        setClear(true);
    }
    function removeSemester(fsemesters:Course[][],ssemesters:Course[][],season:string){
        let n:number;
        let copy:Course[][];
        if (season=="fall"){
            copy=[...fsemesters];
            copy.splice(fsemesters.length-1,1);
            if(fsemesters.length>0){
                for(let i=0;i<fsemesters[fsemesters.length-1].length;i++){
                    n=fsemesters[fsemesters.length-1][i].id;
                    courseList[n-1].enrolled=0;
                }
            }
            if(copy.length==0 && ssemesters.length==0){
                setClear(false);
            }
            setCourseList([...courseList]);
            setFallSemesters(copy);
        }else{
            copy=[...ssemesters];
            copy.splice(ssemesters.length-1,1);
            if(ssemesters.length>0){
                for(let i=0;i<ssemesters[ssemesters.length-1].length;i++){
                    n=ssemesters[ssemesters.length-1][i].id;
                    courseList[n-1].enrolled=0;
                }
            }
            if(fsemesters.length==0 && copy.length==0){
                setClear(false);
            }
            setSpringSemesters(copy);
        }
        setCourseList([...courseList]);
    }
    function clearSemester(){
        for(let i=0;i<courseList.length;i++){
            courseList[i].enrolled=0;
        }
        setCourseList([...courseList]);
        setClear(false);
        setFallSemesters([]);
        setSpringSemesters([]);
    }
    function setDefault(){
        defaultfall.map((semester,i)=>{
            semester.map((course)=>{
                course.enrolled=i+1;
            });
        });
        defaultspring.map((semester,i)=>{
            semester.map((course)=>{
                course.enrolled=2*(i+1);
            });
        });
        setFallSemesters(defaultfall);
        setSpringSemesters(defaultspring);
        setClear(true);
    }

    function download(){
        function semCourses(c: Course[]){
            const semCourse = c.map((co: Course) => co.name + "," + co.description + "," + co.credits + "\n");
            return semCourse;
        }
    
        const csvContent = "data:text/csv;charset=utf-8," + "\nFall Semesters: \n" + "Course, " + "Name, " + "Credits\n" + fallsemesters.map((f: Course[]) => semCourses(f) + "\n") ;
  
        const hiddenElement = document.createElement("a");
        hiddenElement.href = encodeURI(csvContent);
        hiddenElement.target = "_blank";
        hiddenElement.download = "Schedule.csv";
        hiddenElement.click();
    }
 
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
                    <div className="col">
                        {/* rightside of page row */}
                        <div className="row no-gutters" id="schedule-title">
                            <h3>Schedule</h3>
                            {/* fall sem column */}
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        {clear?
                                            <button className="btn btn-light btn-sm" onClick={()=>clearSemester()}>Clear all semesters</button>:
                                            <button className="btn btn-light btn-sm" onClick={()=>setDefault()}>Set default plan</button>}
                                    </div>
                                </div>
                                <button className="btn btn-light btn-sm" onClick={()=>addSemester(fallsemesters,springsemesters,"fall")}>Add fall semester</button>
                                {clear?
                                    <button className="btn btn-light btn-sm" onClick={()=>removeSemester(fallsemesters,springsemesters,"fall")}>Remove last fall semester</button>:
                                    <div></div>
                                }
                                {fallsemesters.map((Courses,i)=>{
                                    return(
                                        <Semester key = {i}
                                            year={i+1}
                                            season = {"Fall"} 
                                            courses = {Courses}
                                            courseList={courseList}
                                            setCourseList={setCourseList}
                                        />);
                                })}
                            </div>
                            {/* spring sem column */}
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <button className="btn btn-light btn-sm">Save plan</button>
                                        <button className="btn btn-light btn-sm">Load plan</button>
                                        <button className="btn btn-light btn-sm" onClick={download}>Download</button>
                                    </div>
                                </div>
                                <button className="btn btn-light btn-sm" onClick={()=>addSemester(fallsemesters,springsemesters,"spring")}>Add spring semester</button>
                                {clear?
                                    <button className="btn btn-light btn-sm" onClick={()=>removeSemester(fallsemesters,springsemesters,"spring")}>Remove last spring semester</button>:
                                    <div></div>
                                }
                                {springsemesters.map((Courses,i)=>{
                                    return(
                                        <Semester key = {i}
                                            year = {i+1}
                                            season = {"Spring"} 
                                            courses = {Courses}
                                            courseList={courseList}
                                            setCourseList={setCourseList}
                                        />);
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
