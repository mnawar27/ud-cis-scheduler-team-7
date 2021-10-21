import React from "react";

export function Semester(): JSX.Element{
    const year =1;
    const season="Fall";
    return (
        <div className="semester">
            <div>Year {year} {season} Semester </div>
            <div>Courses:
            </div>
            <p>Cisc 108    Credits:3</p>
            <p>Cisc 181    Credits:3</p>
        </div>
    );
}