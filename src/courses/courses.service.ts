/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common'
import { COURSES } from './courses.mock'

@Injectable()
export class CoursesService {
  courses = COURSES;

  //http://localhost:3000/courses
  getCourses(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.courses);
    });
  }

  //http://localhost:3000/courses/3
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

  addCourse(course): Promise<any> {
    return new Promise(resolve => {
      this.courses.push(course);
      resolve(this.courses);
    });
  }

  updateCourse(courseId: number, courseUpdated: any) {
    const id = Number(courseId);
    return new Promise((resolve) => {
      const course = this.courses.find((course) => course.id === id);

      if (!course) {
        throw new HttpException(`O curso com esse id não existe!`, 404);
      }

      // Atualize os dados do exemplo com os novos dados
      course.title = courseUpdated.title;
      course.description = courseUpdated.description;

      resolve(this.courses);
    });
  }

  deleteCourse(courseId): Promise<any> {
    const id = Number(courseId);
    return new Promise((resolve) => {
      const index = this.courses.findIndex((course) => course.id === id);

      if (index === -1) {
        throw new HttpException(`O curso com esse id não existe!`, 404);
      }

      this.courses.splice(index, 1);
      resolve(this.courses);
    });
  }

}
