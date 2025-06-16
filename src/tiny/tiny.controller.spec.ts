import { Test, TestingModule } from '@nestjs/testing';
import { TinyController } from './tiny.controller';

describe('TinyController', () => {
  let controller: TinyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TinyController],
    }).compile();

    controller = module.get<TinyController>(TinyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
