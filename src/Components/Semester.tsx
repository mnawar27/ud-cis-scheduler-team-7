import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Course from "../Interfaces/Course";
import {AddCourseMenu} from "./AddCourseMenu";
import COURSES from "../Assets/courses.json";

export function Semester(props:{courses:Course[];year:number;season:string;setCurrentCourses:(arg0:Course[])=>void}): JSX.Element{
    const [popup,setPopup]=useState(false);
    const [courses,setCourses]=useState(props.courses);

    function clearSemester(){
        setCourses([]);
    }
    function removeCourse(course:Course){
        const copy1:Course[]=[...courses];
        for (let i=0;i<courses.length;i++){
            if(course.id==courses[i].id){
                copy1.splice(i,1);

            }
        }
        setCourses(copy1);
    }
    

    return <div className={"semester"}>
        Year {props.year}   {props.season} Semester
        <table>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Credits</td>
                <td>Preq for</td>
                
            </tr>
            {courses.slice().map((Course,i)=> {
                const prereqs:string[]=[];
                for(let i=0;i<COURSES.length;i++){
                    if(COURSES[i].prereq!=null){
                        if(COURSES[i].prereq?.includes(Course.name)){
                            prereqs.push(COURSES[i].name);
                        }
                    }
                }
                return (
                    <tr key={i}>
                        <td scope="col">{Course.name}</td>
                        <td scope="col">{Course.description}</td>
                        <td scope="col">{Course.credits}</td>
                        <td scope="col">{prereqs.map((i)=>{
                            return i+"\n";
                        }
                        )}</td>
                        <td scope="col"><button className="btn btn-light btn-sm" onClick={()=>removeCourse(Course)}>Remove course</button></td>

                    </tr>
                );
            })}
        </table>
        <Button className="btn btn-light btn-sm" onClick={()=>clearSemester()}>Clear courses</Button>
        <Button className="btn btn-light btn-sm" onClick={()=>setPopup(true)}>Add course</Button>
        <AddCourseMenu trigger={popup} setTrigger={setPopup} setCourses={setCourses} courses={courses}></AddCourseMenu>
    </div>
    ;
}
