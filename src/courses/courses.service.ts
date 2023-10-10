import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {
  courses = COURSES;

  getCourses(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.courses);
    });
  }

  getCourse(courseId): Promise<any> {
    const id = Number(courseId);
    return new Promise((resolve) => {
      const course = this.courses.find((course) => course.id === id);
      if (!course) {
        throw new HttpException(`O curso com esse id não existe!`, 404);
      }
      resolve(course);
    });
  }
}
