import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Course from "../Interfaces/Course";
import COURSES from "../Assets/courses.json";

export function Semester({ course }: {course: Course}): JSX.Element{
    const [sliceStart, setSliceStart] = useState(0);
    const [sliceEnd, setSliceEnd] = useState(4);

    function clearSemester(){
        setSliceStart(0);
        setSliceEnd(0);
    }

    return <div className={"semester"}>
        <table>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Credits</td>
            </tr>
            {COURSES.slice(sliceStart,sliceEnd).map((Course, i)=> {
                return (
                    <tr key={i}>
                        <td scope="col">{course.name}</td>
                        <td scope="col">{course.description}</td>
                        <td scope="col">{course.credits}</td>
                    </tr>
                );
            })}
        </table>
        <Button className="btn btn-light btn-sm" onClick={()=>clearSemester()}>Clear courses</Button>
    </div>
    ;
}
