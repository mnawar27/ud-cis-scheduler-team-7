interface Course{
    id: number
    name: string
    description: string
    credits: number | string
    prereq?: string | null
    coreq?: string | null
    enrolled?:number
}
export default Course;
