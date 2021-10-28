import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Course from "../Interfaces/Course";
import COURSES from "../Assets/courses.json";
import {AddCourseMenu} from "./AddCourseMenu";

export function Semester(props:{course:Course;year:number;season:string}): JSX.Element{
    const [sliceStart, setSliceStart] = useState(0);
    const [sliceEnd, setSliceEnd] = useState(4);
    const [popup,setPopup]=useState(false);

    function clearSemester(){
        setSliceStart(0);
        setSliceEnd(0);
    }
    function addCourse(){
        //const courseCopy=COURSES.slice(sliceStart,sliceEnd);

        setSliceEnd(sliceEnd+1);
    }

    return <div className={"semester"}>
        Year {props.year}   {props.season} Semester
        <table>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Credits</td>
            </tr>
            {COURSES.slice(sliceStart,sliceEnd).map((Course,i)=> {
                return (
                    <tr key={i}>
                        <td scope="col">{Course.name}</td>
                        <td scope="col">{Course.description}</td>
                        <td scope="col">{Course.credits}</td>
                    </tr>
                );
            })}
        </table>
        <Button className="btn btn-light btn-sm" onClick={()=>clearSemester()}>Clear courses</Button>
        <Button className="btn btn-light btn-sm" onClick={()=>setPopup(true)}>Add course</Button>
        <AddCourseMenu trigger={popup} setTrigger={setPopup}></AddCourseMenu>
    </div>
    ;
}
