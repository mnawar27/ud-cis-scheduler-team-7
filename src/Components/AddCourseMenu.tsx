import React from "react";
import { Button } from "react-bootstrap";
import Course from "../Interfaces/Course";

export function AddCourseMenu(props:{trigger:boolean;courses:Course[];year:number;season:string;courseList:Course[] ; setTrigger:(arg0:boolean)=>void, setCourses:(arg0:Course[])=>void, setCourseList:(arg0:Course[])=>void}): JSX.Element{
    function addCourse(course:Course,i:number){
        props.setCourses([...props.courses,course]);
        props.setTrigger(false);
        if (props.season=="Fall"){
            props.courseList[i].enrolled=props.year;
        }else{
            props.courseList[i].enrolled=props.year*2;
        }
        props.setCourseList([...props.courseList]);
    }
    const closeAddDiagram = () => {
        props.setTrigger(false);
    };
    return props.trigger ?
        <div>
            <h5>Course list &nbsp;&nbsp; <Button id="cancel-button" className='diagram-cancel btn btn-sm' onClick={closeAddDiagram}>Cancel</Button></h5>
            <ul className="nav navbar-nav">
                {props.courseList.map((Course, i) => {
                    if(!Course.enrolled){
                        return <li key={i}><Button className="btn btn-sm" onClick={()=>addCourse(Course,i)}>+ {Course.name} {Course.description}</Button> </li>;
                    }
                })}
            </ul>
        </div>
        :<div>
        </div>;  
}

