export declare class CoursesService {
    courses: {
        id: number;
        title: string;
        description: string;
    }[];
    getCourses(): Promise<any>;
}
