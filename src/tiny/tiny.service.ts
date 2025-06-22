import { Injectable } from '@nestjs/common';

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

  getTiny(weapon?: "stars" | "nunchucks") {
    if(weapon) {
      return this.tinys.filter(tiny => tiny.weapon === weapon);
    }
    return this.tinys;
  }
}
