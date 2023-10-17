import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';
export declare class CoursesController {
    private coursesService;
    constructor(coursesService: CoursesService);
    getCourses(): Promise<any>;
    getCourse(courseId: any): Promise<any>;
    addCourse(createCourseDto: CreateCourseDto): Promise<any>;
    update(courseId: number, createCourseDto: CreateCourseDto): Promise<unknown>;
    deleteCourse(query: any): Promise<any>;
}
