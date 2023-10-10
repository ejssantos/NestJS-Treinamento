import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';

/**
 *  Tipos de requisições:
 *      Get         --> Buscar dados.
 *      Post        --> Enviar algum dado.
 *      Patch       --> Atualizar algum dado.
 *      Delete      --> Remover algum dado.
 */

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService){}

    @Get()
    async getCourses() {
        const courses = await this.coursesService.getCourses();
        return courses;
    };
};
