import React from "react";

export function Semester(): JSX.Element{
   let year :number=1;
   let season :string="Fall";
    return (<div>
        <div>Year {year} {season} Semester </div>
        <div>Courses:
             </div>
             <p>Cisc 108    Credits:3</p>
             <p>Cisc 181    Credits:3</p>
        </div>
    )
}