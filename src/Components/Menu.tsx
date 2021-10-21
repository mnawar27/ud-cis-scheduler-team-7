import React from "react";

export function Menu(): JSX.Element{
    return(
        <div className="menu">
            <h5>Incomplete Requirements</h5>
            <ul className="nav navbar-nav">
                <li>CISC 108: Introduction to Computer Science I</li>
                <li>CISC 181: Introduction to Computer Science II</li>
                <li>CISC 210: Introduction to Systems Programming</li>
                <li>CISC 220: Data Structures</li>
                <li>CISC 260: Machine Org. and Assembly Language</li>
                <li>CISC 303: Automata Theory</li>
                <li>CISC 320: Introduction to Algorithms</li>
                <li>CISC 355: Computers Ethics and Society</li>
                <li>CISC 275: Introduction to Software Engineering</li>
                <li>ENGL 110: Seminar in Composition</li>
                <li>EGGG 101: Introduction to Engineering</li>
            </ul>
            <br/>
            <h5>Complete Requirements</h5>
            <ul> 
                <li>N/A</li>
            </ul>
        </div>
    );
}