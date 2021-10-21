 interface Course{
    name: string
    credits: number
    prereq?: Course
;}
export default Course;