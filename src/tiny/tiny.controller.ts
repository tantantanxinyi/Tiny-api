import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateTinyDto } from './dto/create-tiny.dto';
import { UpdateTinyDto } from './dto/update-tiny.dto';

@Controller('tiny')
export class TinyController {
  // Get /tiny?tyoe=fast ==> []
  @Get()
  getTiny(@Query('type') type: string) {
    return [{ type }];
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
  createTiny(@Body() createTinyDto: CreateTinyDto) {
    return {
      name: createTinyDto.name,
    };
  }

  // PUT /tiny/:id ==> {...}
  @Put(':id')
  updateTiny(@Param('id') id: string, @Body() updateTinyDto: UpdateTinyDto) {
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
