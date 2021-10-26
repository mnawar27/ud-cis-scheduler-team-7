import React from "react";
import Course from "../Interfaces/Course";

export function Semester(props:{year: number, season: string, courses: Course[]}): JSX.Element{
    const courseList=props.courses.map((Course)=><li key={Course.name}><p>{Course.name}   Credits:{Course.credits}</p></li>);
    return <div className={"semester"}>
        <div><h5>Year {props.year} {props.season} Semester </h5></div>
        <br/>
        <ul>{courseList}</ul>
    </div>
    ;
}
