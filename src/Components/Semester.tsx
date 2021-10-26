import React, { useState } from "react";
import Course from "../Interfaces/Course";

export function Semester(props:{year: number, season: string, courses: Course[]}): JSX.Element{
    const [courses,setCourses]=useState(props.courses);
    const courseList=courses.map((Course)=><li key={Course.name}><p>{Course.name}   Credits:{Course.credits}</p></li>);
    function clearSemester(){
        setCourses([]);
    }
    return <div className={"semester"}>
        <div><h5>Year {props.year} {props.season} Semester </h5></div>
        <br/>
        <ul>{courseList} <button className="btn clear" onClick={()=>clearSemester()}>Clear courses</button></ul>
    </div>
    ;
}
