import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies') // 이게 바로 라우터다!
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  GetOne(@Param(`id`) movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param(`id`) movieId: string) {
    return `This will delete a movie with id : ${movieId}`;
  }

  @Patch(`/:id`)
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
