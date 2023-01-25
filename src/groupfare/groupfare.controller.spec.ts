import { Test, TestingModule } from '@nestjs/testing';
import { GroupfareController } from './groupfare.controller';
import { GroupfareService } from './groupfare.service';

describe('GroupfareController', () => {
  let controller: GroupfareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupfareController],
      providers: [GroupfareService],
    }).compile();

    controller = module.get<GroupfareController>(GroupfareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
