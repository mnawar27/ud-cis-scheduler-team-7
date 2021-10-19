import React from "react";
import Course from "../Interfaces/Course";
export function Semester(props:{year :number,season:string,courses:Course[]}): JSX.Element{
    const Cisc108 : Course ={
        name:"Cisc 108",
        credits:3,
    };
    const Cisc181 : Course ={
        name:"Cisc181",
        credits:3,
        prereq:Cisc108,
    };
    return (<div className={"semester"}>
        <div>Year {props.year} {props.season} Semester </div>
        <div>Courses:
        </div>
        <p>{Cisc108.name}    Credits:{Cisc108.credits}</p>
        <p>{Cisc181.name}    Credits:{Cisc181.credits}</p>
    </div>
    );
}