interface Course{
    id: number
    name: string
    description: string
    credits: number | string
    prereq?: string | null
    coreq?: string | null
    enrolled?:boolean
}
export default Course;
