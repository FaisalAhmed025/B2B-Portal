import { Test, TestingModule } from '@nestjs/testing';
import { SubagentController } from './subagent.controller';
import { SubagentService } from './subagent.service';

describe('SubagentController', () => {
  let controller: SubagentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubagentController],
      providers: [SubagentService],
    }).compile();

    controller = module.get<SubagentController>(SubagentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
