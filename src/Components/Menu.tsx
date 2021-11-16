import React, { useState } from "react";
import COURSES from "../Assets/courses.json";
import { Button } from "react-bootstrap";

export function Menu(): JSX.Element{
    const [name,setName] = useState("");
    const [description, setDescription] = useState("");
    const [credits, setCredits] = useState<number>(3);
    const[value,setValue] = useState(0);
    const [override,setOverride] = useState(false);
    value;
    function overrideCourse(i:number){
        COURSES[i].name=name;
        COURSES[i].description=description;
        COURSES[i].credits=credits;
        setValue(value=>value+1);
    }
    return(
        <div className="menu">
            {override?
                <div>
                    <h5>Override course info</h5>
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
                    <Button id="cancel-button" className="btn btn-sm" onClick={()=>setOverride(false)}>Cancel</Button>
                </div>:
                <div>
                    <button className="btn btn-light btn-sm" onClick={()=>setOverride(true)}>Override course</button>
                </div>
            }
            <br/>
            <h6><strong>Incomplete Requirements</strong></h6>
            <ul id="menu-list" className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    if(Course.enrolled==0){
                        return <li key={i}><strong>{Course.name}</strong> {Course.description} <button className="btn btn-light btn-sm" onClick={()=>overrideCourse(i)}>Override</button></li>;
                    }
                })}
            </ul>
            <hr/>
            <h6><strong>Complete Requirements</strong></h6>
            <ul id="menu-list" className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    if(Course.enrolled>0){
                        return <li key={i}><strong>{Course.name}</strong> {Course.description} <button onClick={()=>overrideCourse(i)}> Override This Course</button></li>;
                    }
                })}
            </ul>
        </div>
    );
}