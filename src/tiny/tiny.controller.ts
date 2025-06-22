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
import { TinyService } from './tiny.service';

@Controller('tiny')
export class TinyController {
  // Get /tiny?weapon=fast ==> []
  @Get()
  getTiny(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    const serice = new TinyService();
    return serice.getTiny(weapon);
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
