import { Test, TestingModule } from '@nestjs/testing';
import { DeletedAgentController } from './deleted_agent.controller';
import { DeletedAgentService } from './deleted_agent.service';

describe('DeletedAgentController', () => {
  let controller: DeletedAgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeletedAgentController],
      providers: [DeletedAgentService],
    }).compile();

    controller = module.get<DeletedAgentController>(DeletedAgentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
