import React from "react";
import COURSES from "../Assets/courses.json";

export function Menu(): JSX.Element{
    return(
        <div className="menu">
            <h3>Course list</h3>
            <h6>Incomplete Requirements</h6>
            <ul className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    return <li key={i}><strong>{Course.name}</strong> {Course.description}</li>;
                })}
            </ul>
            <hr/>
            <h6>Complete Requirements</h6>
            <ul className="nav navbar-nav">
            </ul>
        </div>
    );
}