import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeletedAgentService } from './deleted_agent.service';
import { CreateDeletedAgentDto } from './dto/create-deleted_agent.dto';
import { UpdateDeletedAgentDto } from './dto/update-deleted_agent.dto';

@Controller('deleted-agent')
export class DeletedAgentController {
  constructor(private readonly deletedAgentService: DeletedAgentService) {}

  @Post()
  create(@Body() createDeletedAgentDto: CreateDeletedAgentDto) {
    return this.deletedAgentService.create(createDeletedAgentDto);
  }

  @Get('GetALlDeletedAgent')
  findAll() {
    return this.deletedAgentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deletedAgentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeletedAgentDto: UpdateDeletedAgentDto) {
    return this.deletedAgentService.update(+id, updateDeletedAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deletedAgentService.remove(+id);
  }
}
