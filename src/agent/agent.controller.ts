import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpException, HttpStatus } from '@nestjs/common';
import { AgentService } from './agent.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { Request, Response, NextFunction } from 'express';


@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post('create')
  create(@Body() createAgentDto: CreateAgentDto) {
    return this.agentService.create(createAgentDto);
  }

  @Get('allagents')
  findAll() {
    return this.agentService.findAll();
    
    
  }

  @Get(':id')
  findone(@Param('id') id: number) {
   const agent =this.agentService.findOne(+id)
    if(!agent){
      throw new HttpException(`User ${id} does not Exists`, HttpStatus.NOT_FOUND)
    };
    return agent
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgentDto: UpdateAgentDto) {
    return this.agentService.update(+id, updateAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agentService.remove(+id);
  }
}
