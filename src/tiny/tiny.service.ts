import { Injectable } from '@nestjs/common';
import { CreateTinyDto } from './dto/create-tiny.dto';
import { UpdateTinyDto } from './dto/update-tiny.dto';

@Injectable()
export class TinyService {
  private tinys: any[] = [
    {
      id: 0,
      name: 'tiny1',
      weapon: 'stars',
    },
    {
      id: 1,
      name: 'tiny2',
      weapon: 'nunchucks',
    },
  ];

  getTinys(weapon?: 'stars' | 'nunchucks') {
    if (weapon) {
      return this.tinys.filter((tiny) => tiny.weapon === weapon);
    }
    return this.tinys;
  }

  getTiny(id: number) {
    const tiny = this.tinys.find((tiny) => tiny.id === id);
    if (!tiny) {
      throw new Error(`Tiny with is not found`);
    }

    return tiny;
  }

  createTiny(createTinyDto: CreateTinyDto) {
    const newTiny = {
      ...createTinyDto,
      id: Date.now(), // Using timestamp as a simple unique ID
    };
    this.tinys.push(createTinyDto);

    return newTiny;
  }

  updateTiny(id: number, updateTinyDto: UpdateTinyDto) {
    this.tinys = this.tinys.map((tiny) => {
      if (tiny.id === id) {
        return {
          ...tiny,
          ...updateTinyDto,
        };
      }
      return tiny;
    });
    return this.getTiny(id);
  }

  removeTiny(id: number) {
    const toBeRemoved = this.getTiny(id);
    this.tinys = this.tinys.filter((tiny) => tiny.id !== id);
    return toBeRemoved;
  }
}
