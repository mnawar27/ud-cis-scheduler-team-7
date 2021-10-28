import React from "react";
import COURSES from "../Assets/courses.json";
import Course from "../Interfaces/Course";

export function AddCourseMenu(props:{trigger:boolean}): JSX.Element{

    return props.trigger ?(
        <div className="menu">
            <h3>Course list</h3>
            <ul className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    return <li key={i}><strong>{Course.name}</strong> {Course.description} <button>Add course</button></li>;
                })}
            </ul>
        </div>
    ):<div>

    </div>;
    
}