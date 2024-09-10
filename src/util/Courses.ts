export interface Course {
    number: string,
    name: string,
    professor: string,
    description: string,
}

export const courses: Course[] = [
    {
        number: "ITSS 3311",
        name: "Introduction to Programming",
        professor: "Masudal Khan",
        description: "ITSS 3311 is an intro-level programming class within the CIS Tech department. It is taught in Java.",
    },
    {
        number: "ITSS 3300",
        name: "IT for Business",
        professor: "Sean Owens",
        description: "ITSS 3300 is a course that covers the theoretical essentials of leading and managing Information Technology and Information Systems essentials in a business."
    }


]