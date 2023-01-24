import { Test, TestingModule } from '@nestjs/testing';
import { StafflistController } from './stafflist.controller';
import { StafflistService } from './stafflist.service';

describe('StafflistController', () => {
  let controller: StafflistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StafflistController],
      providers: [StafflistService],
    }).compile();

    controller = module.get<StafflistController>(StafflistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
