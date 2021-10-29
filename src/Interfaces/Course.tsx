interface Course{
    id: number
    name: string
    description: string
    credits: number | string
    prereq?: string | null
    coreq?: string | null
}
export default Course;
