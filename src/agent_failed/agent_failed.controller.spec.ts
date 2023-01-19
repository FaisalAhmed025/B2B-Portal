import { Test, TestingModule } from '@nestjs/testing';
import { AgentFailedController } from './agent_failed.controller';
import { AgentFailedService } from './agent_failed.service';

describe('AgentFailedController', () => {
  let controller: AgentFailedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgentFailedController],
      providers: [AgentFailedService],
    }).compile();

    controller = module.get<AgentFailedController>(AgentFailedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
