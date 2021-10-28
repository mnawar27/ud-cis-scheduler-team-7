import React from "react";
import COURSES from "../Assets/courses.json";
import Course from "../Interfaces/Course";

export function AddCourseMenu(props:{trigger:boolean ; setTrigger:(arg0:boolean)=>void}): JSX.Element{

    function addCourse(course:Course){
        props.setTrigger(false);

    }
    return props.trigger ?(
        <div className="menu">
            <h3>Course list</h3>
            <ul className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    return <li key={i}><strong>{Course.name}</strong> {Course.description} <button onClick={()=>addCourse(Course)}>Add course</button></li>;
                })}
            </ul>
        </div>
    ):<div>

    </div>;
    
}