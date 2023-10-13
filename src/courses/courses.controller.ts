import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

/**
 *  Tipos de requisições:
 *      Get         --> Buscar dados.
 *      Post        --> Enviar algum dado.
 *      Patch       --> Atualizar algum dado.
 *      Delete      --> Remover algum dado.
 */

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async getCourses() {
      const courses = await this.coursesService.getCourses();
      return courses;
  };

  @Get(':courseId')
  async getCourse(@Param('courseId') courseId) {
      const course = await this.coursesService.getCourse(courseId);
      return course;
  }

  @Post()
  async addCourse(@Body() createCourseDto: CreateCourseDto) {
      const course = await this.coursesService.addCourse(createCourseDto);
      return course;
  }
  
/*
  @Patch(':courseId')
  async updateCourse(@Param() { courseId }: ParamsWithId, @Body() course: create-course-dto) {
    return await this.coursesService.updateCourse(courseId, course);
  }
*/

  @Put(':courseId')
  async updateCourse(@Param('courseId') courseId: Number, @Body() createCourseDto: CreateCourseDto) {
    const course = await this.coursesService.updateCourse(createCourseDto);
    return course;
  }

  /*
  @Patch(':courseId')
  async updateCourse(@Param('courseId') courseId: number, @Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.updateCourse(courseId, createCourseDto);
  }
  */

  //localhost:3000/courses?nome_do_parametro=valor_do_parametro
  @Delete()
  async deleteCourse(@Query() query) {
    const courses = await this.coursesService.deleteCourse(query.courseId);
    return courses;
  }

};