import Course from "../Interfaces/Course";
import react from "react";
export function Course(props:{course:Course}): JSX.Element{
    return(
        <div>{props.course.name}    Credits:{props.course.credits}</div>
    );
}