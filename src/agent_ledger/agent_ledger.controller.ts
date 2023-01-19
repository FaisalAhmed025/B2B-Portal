import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgentLedgerService } from './agent_ledger.service';
import { createAgentLedgerDto } from './dto/create-agent_ledger.dto';
import { UpdateAgentLedgerDto } from './dto/update-agent_ledger.dto';

@Controller('agent-ledger')
export class AgentLedgerController {
  constructor(private readonly agentLedgerService: AgentLedgerService) {}

  @Post('create')
  create(@Body() createAgentLedgerDto:createAgentLedgerDto) {
    return this.agentLedgerService.create(createAgentLedgerDto);
  }

  @Get('allagentledger')
  findAll() {
    return this.agentLedgerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agentLedgerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgentLedgerDto: UpdateAgentLedgerDto) {
    return this.agentLedgerService.update(+id, updateAgentLedgerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agentLedgerService.remove(+id);
  }
}
