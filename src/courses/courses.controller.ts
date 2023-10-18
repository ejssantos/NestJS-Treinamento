/* eslint-disable prettier/prettier */
import { Controller, Body, Param, Get, Post, Put, Delete, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
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
  @ApiOkResponse({description: 'Lista de cursos.'})
  async getCourses() {
      const courses = await this.coursesService.getCourses();
      return courses;
  };

  @Get(':courseId')
  @ApiOkResponse({description: 'Busca de cursos.'})
  async getCourse(@Param('courseId') courseId) {
      const course = await this.coursesService.getCourse(courseId);
      return course;
  }

  @Post()
  @ApiCreatedResponse({description: 'Inclusão de curso.'})
  async addCourse(@Body() createCourseDto: CreateCourseDto) {
      const course = await this.coursesService.addCourse(createCourseDto);
      return course;
  }

  @Put(':courseId')
  @ApiOkResponse({description: 'Alteração de curso.'})
  async update(@Param('courseId') courseId: number, @Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.updateCourse(courseId, createCourseDto);
  }

  @Delete()
  @ApiOkResponse({description: 'Exclusão de curso.'})
  async deleteCourse(@Query() query) {
    const courses = await this.coursesService.deleteCourse(query.courseId);
    return courses;
  }

};