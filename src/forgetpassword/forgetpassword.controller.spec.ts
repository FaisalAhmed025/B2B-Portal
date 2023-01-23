import { Test, TestingModule } from '@nestjs/testing';
import { ForgetpasswordController } from './forgetpassword.controller';
import { ForgetpasswordService } from './forgetpassword.service';

describe('ForgetpasswordController', () => {
  let controller: ForgetpasswordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForgetpasswordController],
      providers: [ForgetpasswordService],
    }).compile();

    controller = module.get<ForgetpasswordController>(ForgetpasswordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
