import { Test, TestingModule } from '@nestjs/testing';
import { SegmentreturnwayController } from './segmentreturnway.controller';
import { SegmentreturnwayService } from './segmentreturnway.service';

describe('SegmentreturnwayController', () => {
  let controller: SegmentreturnwayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SegmentreturnwayController],
      providers: [SegmentreturnwayService],
    }).compile();

    controller = module.get<SegmentreturnwayController>(SegmentreturnwayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
