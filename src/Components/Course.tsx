import Course from "../Interfaces/Course"
export function Course(props:{course:Course}){
    return(
        <div>{props.course.name}    Credits:{props.course.credits}</div>
    );
}