

import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { AgentService } from './agent.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentSer: AgentService) {}

  @UseGuards(JwtAuthGuard)
  @Post('createagent')
  create(@Body() createagentDto: CreateAgentDto) {
    return this.agentSer.create(createagentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('getallagent')
  findAll() {
    return this.agentSer.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<Response> {
    let user = await this.agentSer.findOne(+id);
    if (user) return res.status(HttpStatus.OK).json(user);
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ error: 'This resource  no longer exist or has been removed' });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('Id') Id: number,
    @Body() updateagentDto: UpdateAgentDto,
    @Res() res: Response,
  ) {
    const response = await this.agentSer.update(+Id, updateagentDto);
    if (response)
      return res
        .status(HttpStatus.OK)
        .json({ message: 'Book information updated successfully' });
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ error: 'The resource to be updated no longer exist' });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('Id') Id: string, @Res() res: Response) {
    await this.agentSer.remove(+Id);
    res
      .status(HttpStatus.OK)
      .json({ message: 'Book details deleted successfully' });
  }
}



















// import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
// import { AgentService } from './agent.service';
// import { CreateAgentDto } from './dto/create-agent.dto';
// import { UpdateAgentDto } from './dto/update-agent.dto';
// import { Request, Response, NextFunction } from 'express';


// @Controller('agent')
// export class AgentController {
//   constructor(private readonly agentService: AgentService) {}

//   @Post('create')
//   create(@Body() createAgentDto: CreateAgentDto) {
//     return this.agentService.create(createAgentDto);
//   }

//   @Get('allagents')
//   findAll() {
//     return this.agentService.findAll();
    
    
//   }

//   @Get(':id')
//   findone(@Param('id',ParseIntPipe) id:number) {
//    const agent =this.agentService.findOne(+id)
//     if(!agent){
//       throw new HttpException(`User ${id} does not Exists`, HttpStatus.NOT_FOUND)
//     };
//     return agent
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateAgentDto: UpdateAgentDto) {
//     return this.agentService.update(+id, updateAgentDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.agentService.remove(+id);
//   }
// }
