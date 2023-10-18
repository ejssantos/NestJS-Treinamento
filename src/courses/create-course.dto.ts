import { ApiProperty } from "@nestjs/swagger";

/* eslint-disable prettier/prettier */
export class CreateCourseDto {
  @ApiProperty({type: Number, description: 'Código do curso.'})
  readonly id: number;

  @ApiProperty({type: String, description: 'Título do curso.'})
  readonly title: string;
  
  @ApiProperty({
    type: String,
    description: 'Descrição do curso.',
    required: false,
    example: 'Swagger, do básico ao avançado.'
  })
  readonly description: string;
}
