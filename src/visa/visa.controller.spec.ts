import { Test, TestingModule } from '@nestjs/testing';
import { VisaController } from './visa.controller';
import { VisaService } from './visa.service';

describe('VisaController', () => {
  let controller: VisaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisaController],
      providers: [VisaService],
    }).compile();

    controller = module.get<VisaController>(VisaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
