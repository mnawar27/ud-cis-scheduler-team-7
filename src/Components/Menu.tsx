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
    return(
        <div className="menu">
            <div> 
                <h6>Override course info</h6>
                <form>
                    <div className="form-group">
                        <input type='text' placeholder='ID' value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type='text' placeholder='Name' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <select className="form-control form-control-sm" value={credits} onChange={(e)=>setCredits(parseInt(e.target.value))}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </div>
                </form>
            </div>
            <h6>Incomplete Requirements</h6>
            <ul className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    if(Course.enrolled==0){
                        return <li key={i}><strong>{Course.name}</strong> {Course.description} <button className="btn btn-light btn-sm" onClick={()=>overrideCourse(i)}>Override</button></li>;
                    }
                })}
            </ul>
            <hr/>
            <h6>Complete Requirements</h6>
            <ul className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    if(Course.enrolled>0){
                        return <li key={i}><strong>{Course.name}</strong> {Course.description} <button onClick={()=>overrideCourse(i)}> Override This Course</button></li>;
                    }
                })}
            </ul>
        </div>
    );
}