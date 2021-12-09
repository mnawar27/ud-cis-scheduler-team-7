import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Course from "../Interfaces/Course";

export function Menu(props:{courseList:Course[];setCourseList:(arg0:Course[])=>void}): JSX.Element{
    const [name,setName] = useState("");
    const [description, setDescription] = useState("");
    const [credits, setCredits] = useState<number>(3);
    const [override,setOverride] = useState(false);
    function overrideCourse(i:number){
        props.courseList[i].name=name;
        props.courseList[i].description=description;
        props.courseList[i].credits=credits;
        props.setCourseList([...props.courseList]);
    }
    return(
        <div className="menu">
            <h5><strong>Incomplete Requirements</strong></h5>
            {/* <RLDD
                items = {COURSES.map((Course, i) => {
                    if(Course.enrolled==0){
                        return <li key={i}><strong>{Course.name}</strong> {Course.description} <button className="btn btn-light btn-sm" onClick={()=>overrideCourse(i)}>Override</button></li>;
                    }
                })}
                itemRenderer={this.itemRenderer}
                onChange={this.handleRLDDChange}
            /> */}
            <ul id="menu-list" className="nav navbar-nav">
                {props.courseList.map((Course, i) => {
                    if(Course.enrolled==0){
                        return <li key={i}> {override? <button className="btn btn-light btn-sm" onClick={()=>overrideCourse(i)}>Override</button>: null } <strong>{Course.name}</strong> {Course.description}</li>;
                    }
                })}
            </ul>
            <hr/>
            <h5><strong>Complete Requirements</strong></h5>
            <ul id="menu-list" className="nav navbar-nav">
                {props.courseList.map((Course, i) => {
                    if(Course.enrolled!=0){
                        return <li key={i}> {override? <button className="btn btn-light btn-sm" onClick={()=>overrideCourse(i)}>Override</button>: null } <strong>{Course.name}</strong> {Course.description}</li>;
                    }
                })}
            </ul>
            <br/>
            {override?
                <div>
                    <h5>Override course &nbsp;&nbsp; <Button id="cancel-button" className="btn btn-sm" onClick={()=>setOverride(false)}><strong>X</strong></Button></h5>
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
                    <p>Fill in the new <strong>ID</strong>, <strong>name</strong>, and <strong>credits</strong>.<br/>Then click the <strong>Override</strong> button next<br/>to the course you wish to change.</p>
                </div> :
                <div>
                    <Button className="btn btn-light btn-sm" onClick={()=>setOverride(true)}>Override course</Button>
                </div>
            }
        </div>
    );
}