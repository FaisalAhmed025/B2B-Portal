import { Test, TestingModule } from '@nestjs/testing';
import { GroupfareService } from './groupfare.service';

describe('GroupfareService', () => {
  let service: GroupfareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupfareService],
    }).compile();

    service = module.get<GroupfareService>(GroupfareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
