import React, {useState} from "react";
import { Button } from "react-bootstrap";
import COURSES from "../Assets/courses.json";

export function Menu(): JSX.Element{
    
    return(
        <div className="menu">
            <h3>Course list</h3>
            <h6>Incomplete Requirements</h6>
            <ul className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    const[edit, setEdit] = useState(COURSES[i]["description"]);
                    function handleOnClick(newName: string) {
                        //have some type of input field that modifies newName
                        //enter removes input field
                        //then we call the line below
                        setEdit(newName);
                    }
                  
                    return (
                    
                        <li key={i}><strong >{Course.name}</strong> {Course.description} 
                            <li><Button className="btn btn-light btn-sm"> Edit </Button></li>
                        </li>
                    );
                })}
            </ul>
            <hr/>
            <h6>Complete Requirements</h6>
            <ul className="nav navbar-nav">
            </ul>
        </div>
    );
}