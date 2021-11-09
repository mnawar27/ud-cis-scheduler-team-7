import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Course from "../Interfaces/Course";
import {AddCourseMenu} from "./AddCourseMenu";
import COURSES from "../Assets/courses.json";
import EditCourse from "./EditCourse";

export function Semester(props:{courses:Course[];year:number;season:string;setCurrentCourses:(arg0:Course[])=>void}): JSX.Element{
    const [popup,setPopup]=useState(false);
    const [courses,setCourses]=useState(props.courses);

    const [editDiagram, setEditDiagram] = useState(false);
    const [editTmpId,setEditTmpId] = useState<number>(0);

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

    const editCourse = (id:number) => {
        setEditDiagram(true);
        const tmpCourse = courses.filter((res)=>{
            return res.id == id;
        });
        setEditTmpId(tmpCourse[0].id);
    };
  
    
    const editAddCourse=(tmpCourse:Course)=>{
        let curIndex = 0;
        const curCourse = JSON.parse(JSON.stringify(courses));
        courses.forEach((course,index) => {
            if (course.id == tmpCourse.id) curIndex = index;
        });
        curCourse[curIndex] = tmpCourse;
        setCourses(curCourse);
        setEditDiagram(false);
    };
  
    const cancelEditDiagram = () => {
        setEditDiagram(false);
    };
 
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
                        <td scope="col"><button className="btn btn-light btn-sm" onClick={()=>editCourse(Course.id)}>Edit course</button></td>

                    </tr>
                );
            })}
        </table>
        <Button className="btn btn-light btn-sm" onClick={()=>clearSemester()}>Clear courses</Button>
        <Button className="btn btn-light btn-sm" onClick={()=>setPopup(true)}>Add course</Button>
        <AddCourseMenu trigger={popup} setTrigger={setPopup} setCourses={setCourses} courses={courses}></AddCourseMenu>

        {editDiagram?
            <div className='outer-diagram'>
                <div className='diagram'>
                    <EditCourse  editTmpId={editTmpId}  editAddCourse={editAddCourse}/>
                    <button className='diagram-cancel btn btn-primary' onClick={cancelEditDiagram}>Cancel</button>
                </div>
            </div> :
            <div></div>
        }

    </div>
    ;
}
