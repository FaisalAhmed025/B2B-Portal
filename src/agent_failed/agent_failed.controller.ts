import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgentFailedService } from './agent_failed.service';
import { CreateAgentFailedDto } from './dto/create-agent_failed.dto';
import { UpdateAgentFailedDto } from './dto/update-agent_failed.dto';

@Controller('agent-failed')
export class AgentFailedController {
  constructor(private readonly agentFailedService: AgentFailedService) {}
  @Post('create')
  create(@Body() createAgentDto: CreateAgentFailedDto) {
    return this.agentFailedService.create(createAgentDto);
  }

  @Get("allagentfailed")
  findAll() {
    return this.agentFailedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agentFailedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateAgentFailedDto: UpdateAgentFailedDto) {
    return this.agentFailedService.update(+id, UpdateAgentFailedDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agentFailedService.remove(+id);
  }
}
