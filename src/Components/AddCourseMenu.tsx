import React from "react";
import { Button } from "react-bootstrap";
import COURSES from "../Assets/courses.json";
import Course from "../Interfaces/Course";

export function AddCourseMenu(props:{trigger:boolean;courses:Course[] ; setTrigger:(arg0:boolean)=>void, setCourses:(arg0:Course[])=>void}): JSX.Element{
    function addCourse(course:Course,i:number){
        props.setCourses([...props.courses,course]);
        props.setTrigger(false);
        COURSES[i].enrolled=true;
    }
    return props.trigger ?
        <div>
            <h5>Course list</h5>
            <ul className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    return <li key={i}><Button className="btn btn-light btn-sm" onClick={()=>addCourse(Course,i)}>+</Button> <strong>{Course.name}</strong> {Course.description} </li>;
                })}
            </ul>
        </div>
        :<div>
        </div>;  
}

