import { Test, TestingModule } from '@nestjs/testing';
import { ActivitylogController } from './activitylog.controller';
import { ActivitylogService } from './activitylog.service';

describe('ActivitylogController', () => {
  let controller: ActivitylogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivitylogController],
      providers: [ActivitylogService],
    }).compile();

    controller = module.get<ActivitylogController>(ActivitylogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
