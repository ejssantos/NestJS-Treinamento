export declare class CoursesService {
    courses: {
        id: number;
        title: string;
        description: string;
    }[];
    getCourses(): Promise<any>;
    getCourse(courseId: any): Promise<any>;
    addCourse(course: any): Promise<any>;
    updateCourse(courseId: number, courseUpdated: any): Promise<unknown>;
    deleteCourse(courseId: any): Promise<any>;
}
