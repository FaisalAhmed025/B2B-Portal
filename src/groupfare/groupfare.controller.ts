import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupfareService } from './groupfare.service';
import { CreateGroupfareDto } from './dto/create-groupfare.dto';
import { UpdateGroupfareDto } from './dto/update-groupfare.dto';

@Controller('groupfare')
export class GroupfareController {
  constructor(private readonly groupfareService: GroupfareService) {}

  @Post()
  create(@Body() createGroupfareDto: CreateGroupfareDto) {
    return this.groupfareService.create(createGroupfareDto);
  }

  @Get()
  findAll() {
    return this.groupfareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupfareService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupfareDto: UpdateGroupfareDto) {
    return this.groupfareService.update(+id, updateGroupfareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupfareService.remove(+id);
  }
}
