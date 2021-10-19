import React from "react";
import Course from "../Interfaces/Course";
export function Semester(): JSX.Element{
    const Cisc108 : Course ={
        name:"Cisc 108",
        credits:3,
    };
    const Cisc181 : Course ={
        name:"Cisc181",
        credits:3,
        prereq:Cisc108,
    };
    const year =1;
    const season="Fall";
    return (<div className={"semester"}>
        <div>Year {year} {season} Semester </div>
        <div>Courses:
        </div>
        <p>{Cisc108.name}    Credits:{Cisc108.credits}</p>
        <p>{Cisc181.name}    Credits:{Cisc181.credits}</p>
    </div>
    );
}