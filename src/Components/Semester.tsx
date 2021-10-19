import React from "react";
import Course from "../Interfaces/Course";
export function Semester(props:{year :number,season:string,courses:Course[]}): JSX.Element{
    return (<div className={"semester"}>
        <div>Year {props.year} {props.season} Semester </div>
        <div>Courses:
        </div>
        <p>{props.courses[0].name}    Credits:{props.courses[0].credits}</p>
        <p>{props.courses[1].name}    Credits:{props.courses[1].credits}</p>
    </div>
    );
}