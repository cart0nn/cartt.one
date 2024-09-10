import React from 'react';
import {Course} from "../util/Courses.ts"

export function CourseCard({course}: { course: Course }) {
    return (
        <>
            <div className="flex-1 flex text-left text-white font-bold">
                {course.number} - {course.name}
            </div>
            <div className="flex-1 flex text-left text-white italic">
                Prof. {course.professor}
            </div>
            <div className="flex-1 flex text-left mt-3 mb-5 text-white">
                {course.description}
            </div>
        </>
    )
}