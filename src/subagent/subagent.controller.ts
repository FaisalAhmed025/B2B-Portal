import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubagentService } from './subagent.service';
import { CreateSubagentDto } from './dto/create-subagent.dto';
import { UpdateSubagentDto } from './dto/update-subagent.dto';

@Controller('subagent')
export class SubagentController {
  constructor(private readonly subagentService: SubagentService) {}

  @Post('createSubagent')
  create(@Body() createSubagentDto: CreateSubagentDto) {
    return this.subagentService.create(createSubagentDto);
  }

  @Get('allSubAgent')
  findAll() {
    return this.subagentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subagentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubagentDto: UpdateSubagentDto) {
    return this.subagentService.update(+id, updateSubagentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subagentService.remove(+id);
  }
}
