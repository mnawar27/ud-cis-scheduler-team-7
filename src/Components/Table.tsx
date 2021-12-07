import React,{useState } from "react";
import Course from "../Interfaces/Course";
import { Semester } from "./Semester";


export function Table(props:{fallsemesters:Course[][];springsemesters:Course[][];courseList:Course[];defaultfall:Course[][];defaultspring:Course[][];setCourseList:(arg0:Course[])=>void,setFallSemesters:(arg0:Course[][])=>void,setSpringSemesters:(arg0:Course[][])=>void}):JSX.Element{
    const [clear,setClear]=useState(true);
    function addSemester(fsemesters:Course[][],ssemesters:Course[][],season:string){
        if(season=="fall"){
            props.setFallSemesters([...fsemesters,[]]);
        }else{
            props.setSpringSemesters([...ssemesters,[]]);
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
                    props.courseList[n-1].enrolled=0;
                }
            }
            if(copy.length==0 && ssemesters.length==0){
                setClear(false);
            }
            props.setCourseList([...props.courseList]);
            props.setFallSemesters(copy);
        }else{
            copy=[...ssemesters];
            copy.splice(ssemesters.length-1,1);
            if(ssemesters.length>0){
                for(let i=0;i<ssemesters[ssemesters.length-1].length;i++){
                    n=ssemesters[ssemesters.length-1][i].id;
                    props.courseList[n-1].enrolled=0;
                }
            }
            if(fsemesters.length==0 && copy.length==0){
                setClear(false);
            }
            props.setSpringSemesters(copy);
        }
        props.setCourseList([...props.courseList]);
    }
    function clearSemester(){
        for(let i=0;i<props.courseList.length;i++){
            props.courseList[i].enrolled=0;
        }
        props.setCourseList([...props.courseList]);
        setClear(false);
        props.setFallSemesters([]);
        props.setSpringSemesters([]);
    }
    function setDefault(){
        props.defaultfall.map((semester,i)=>{
            semester.map((course)=>{
                course.enrolled=i+1;
            });
        });
        props.defaultspring.map((semester,i)=>{
            semester.map((course)=>{
                course.enrolled=2*(i+1);
            });
        });
        props.setFallSemesters(props.defaultfall);
        props.setSpringSemesters(props.defaultspring);
        setClear(true);
    }
    return <div className="col">
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
                <button className="btn btn-light btn-sm" onClick={()=>addSemester(props.fallsemesters,props.springsemesters,"fall")}>Add fall semester</button>
                {clear?
                    <button className="btn btn-light btn-sm" onClick={()=>removeSemester(props.fallsemesters,props.springsemesters,"fall")}>Remove last fall semester</button>:
                    <div></div>
                }
                {props.fallsemesters.map((Courses,i)=>{
                    return(
                        <Semester key = {i}
                            year={i+1}
                            season = {"Fall"} 
                            courses = {Courses}
                            courseList={props.courseList}
                            setCourseList={props.setCourseList}
                        />);
                })}
            </div>
            {/* spring sem column */}
            <div className="col">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-light btn-sm">Save plan</button>
                        <button className="btn btn-light btn-sm">Load plan</button>
                    </div>
                </div>
                <button className="btn btn-light btn-sm" onClick={()=>addSemester(props.fallsemesters,props.springsemesters,"spring")}>Add spring semester</button>
                {clear?
                    <button className="btn btn-light btn-sm" onClick={()=>removeSemester(props.fallsemesters,props.springsemesters,"spring")}>Remove last spring semester</button>:
                    <div></div>
                }
                {props.springsemesters.map((Courses,i)=>{
                    return(
                        <Semester key = {i}
                            year = {i+1}
                            season = {"Spring"} 
                            courses = {Courses}
                            courseList={props.courseList}
                            setCourseList={props.setCourseList}
                        />);
                })}
            </div>
        </div>
    </div>;
}