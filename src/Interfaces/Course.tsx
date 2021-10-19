export default interface Course{
    name: string
    credits: number
    prereq?: Course
}