import { Test, TestingModule } from '@nestjs/testing';
import { ForgetpasswordService } from './forgetpassword.service';

describe('ForgetpasswordService', () => {
  let service: ForgetpasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForgetpasswordService],
    }).compile();

    service = module.get<ForgetpasswordService>(ForgetpasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
