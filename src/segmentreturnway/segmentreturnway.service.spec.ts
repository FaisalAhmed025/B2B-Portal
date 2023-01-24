import { Test, TestingModule } from '@nestjs/testing';
import { SegmentreturnwayService } from './segmentreturnway.service';

describe('SegmentreturnwayService', () => {
  let service: SegmentreturnwayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SegmentreturnwayService],
    }).compile();

    service = module.get<SegmentreturnwayService>(SegmentreturnwayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
