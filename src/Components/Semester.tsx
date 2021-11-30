import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import Course from "../Interfaces/Course";
import {AddCourseMenu} from "./AddCourseMenu";
import EditCourse from "./EditCourse";

export function Semester(props:{courses:Course[];year:number;season:string,courseList:Course[]; setCourseList:(arg0: Course[])=>void}): JSX.Element{
    const [popup,setPopup]=useState(false);
    const [courses,setCourses]=useState(props.courses);
    const [editDiagram, setEditDiagram] = useState(false);
    const [editTmpId,setEditTmpId] = useState<number>(0);

    function clearSemester(){
        let n:number;
        for (let i=0;i<courses.length;i++){
            n=courses[i].id;
            props.courseList[n-1].enrolled=0;
        }
        props.setCourseList([...props.courseList]);
        setCourses([]);
    }
    function removeCourse(course:Course){
        const copy1:Course[]=[...courses];
        let n:number;
        for (let i=0;i<courses.length;i++){
            if(course.id==courses[i].id){
                copy1.splice(i,1);
                n=course.id;
                props.courseList[n-1].enrolled=0;
            }
        }
        props.setCourseList([...props.courseList]);
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
        <h5>Year {props.year}   {props.season} Semester</h5>
        <div className="table-responsive-xl">
            <Table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <td><strong>ID</strong></td>
                        <td><strong>Name</strong></td>
                        <td><strong>Credits</strong></td>
                        <td><strong>Preq for</strong></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {courses.slice().map((Course,i)=> {
                        const prereqs:string[]=[];
                        for(let i=0;i<props.courseList.length;i++){
                            if(props.courseList[i].prereq!=null){
                                if(props.courseList[i].prereq?.includes(Course.name)){
                                    prereqs.push(props.courseList[i].name);
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

                                <td scope="col" align="center">
                                    <Button id="remove-course-button" className="btn btn-sm" onClick={()=>removeCourse(Course)}>Remove</Button>
                                    <Button id="edit-course-button" className="btn btn-sm" onClick={()=>editCourse(Course.id)}>Edit</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
        <Button className="btn btn-light btn-sm" onClick={()=>clearSemester()}>Clear courses</Button>
        <Button className="btn btn-light btn-sm" onClick={()=>setPopup(true)}>Add course</Button>
        <div className="course-menu">
            <AddCourseMenu trigger={popup} setTrigger={setPopup} setCourses={setCourses} setCourseList={props.setCourseList} courseList={props.courseList} courses={courses} year={props.year} season={props.season}></AddCourseMenu>
        </div>
        {editDiagram?
            <div className='outer-diagram'>
                <div className='diagram'>
                    <EditCourse editTmpId={editTmpId}  editAddCourse={editAddCourse}/>
                    <Button id="cancel-button" className='diagram-cancel btn btn-sm' onClick={cancelEditDiagram}>Cancel</Button>
                </div>
            </div> :
            <div></div>
        }
    </div>
    ;
}
