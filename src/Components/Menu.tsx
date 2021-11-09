import React, { useState } from "react";
import COURSES from "../Assets/courses.json";


export function Menu(): JSX.Element{
    const [name,setName] = useState("");
    const [description, setDescription] = useState("");
    const [credits, setCredits] = useState<number>(3);
    const[value,setValue]=useState(0);
    value;
    function overrideCourse(i:number){
        COURSES[i].name=name;
        COURSES[i].description=description;
        COURSES[i].credits=credits;
        setValue(value=>value+1);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return(
        <div className="menu">
            <h3>Course list</h3>
            <div > Override Course info
                <br/>
                <form>
                    <p><label><li>Course Name</li></label></p>
                    <input type='text' placeholder='edit course name' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <p></p>
                    <p><label><li>Description</li></label></p>
                    <input type='text' placeholder='edit description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    <p></p>
                    <p><label><li>Credit</li></label></p>
                    <input type='number' placeholder='edit credit'value={credits}  onChange={(e)=>setCredits(parseInt(e.target.value))}/>
    
                </form>
            </div>
            <h6>Incomplete Requirements</h6>
            <ul className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    if(Course.enrolled==false){
                        return <li key={i}><strong>{Course.name}</strong> {Course.description} <button onClick={()=>overrideCourse(i)}> Override This Course</button></li>;
                    }
                })}
            </ul>
            <hr/>
            <h6>Complete Requirements</h6>
            <ul className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    if(Course.enrolled==true){
                        return <li key={i}><strong>{Course.name}</strong> {Course.description} <button onClick={()=>overrideCourse(i)}> Override This Course</button></li>;
                    }
                })}
            </ul>
        </div>
    );
}