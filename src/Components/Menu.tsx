import React from "react";

export function Menu(): JSX.Element{
    return(
        <div className="menu">
            <h3>Course list</h3>
            <h6>Incomplete Requirements</h6>
            <ul className="nav navbar-nav">
                <li><strong>CISC 181:</strong> Introduction to Computer Science II</li>
                <li><strong>CISC 210:</strong> Introduction to Systems Programming</li>
                <li><strong>CISC 220:</strong> Data Structures</li>
                <li><strong>CISC 260:</strong> Machine Org. and Assembly Language</li>
                <li><strong>CISC 303:</strong> Automata Theory</li>
                <li><strong>CISC 320:</strong> Introduction to Algorithms</li>
                <li><strong>CISC 355:</strong> Computers Ethics and Society</li>
                <li><strong>CISC 275:</strong> Introduction to Software Engineering</li>
            </ul>
            <hr/>
            <h6>Complete Requirements</h6>
            <ul className="nav navbar-nav"> 
                <li><strong>CISC 108:</strong> Introduction to Computer Science I</li>
                <li><strong>ENGL 110:</strong> Seminar in Composition</li>
                <li><strong>EGGG 101:</strong> Introduction to Engineering</li>
                <li><strong>MATH 241:</strong> Analytic Geometry and Calculus A</li>
            </ul>
        </div>
    );
}