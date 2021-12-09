interface Course{
    id: number
    name: string
    description: string
    credits: number
    prereq?: string | null
    coreq?: string | null
    enrolled?: number
}
export default Course;
