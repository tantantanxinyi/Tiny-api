import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('tiny')
export class TinyController {
  // Get / tiny ==> []
  @Get()
  getTiny() {
    return [];
  }

  // Get / tiny/:id ==> {...}
  @Get(':id')
  GetOneTiny(@Param('id') id: string) {
    return {
      id,
    };
  }

  // POST / tiny ==> {...}
  @Post()
  createTiny(@Param('id') id: string) {
    return {
      id,
    };
  }

  // PUT /tiny/:id ==> {...}
  @Put(':id')
  updateTiny(@Param('id') id: string) {
    return {
      id,
    };
  }

  // DELETE /tiny/:id ==> {...}
  @Delete(':id')
  removeTiny(@Param('id') id: string) {
    return {
      id,
    };
  }
}
