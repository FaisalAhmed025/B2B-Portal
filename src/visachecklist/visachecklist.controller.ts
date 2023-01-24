import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisachecklistService } from './visachecklist.service';
import { CreateVisachecklistDto } from './dto/create-visachecklist.dto';
import { UpdateVisachecklistDto } from './dto/update-visachecklist.dto';

@Controller('visachecklist')
export class VisachecklistController {
  constructor(private readonly visachecklistService: VisachecklistService) {}

  @Post()
  create(@Body() createVisachecklistDto: CreateVisachecklistDto) {
    return this.visachecklistService.create(createVisachecklistDto);
  }

  @Get('visachecklist')
  findAll() {
    return this.visachecklistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visachecklistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisachecklistDto: UpdateVisachecklistDto) {
    return this.visachecklistService.update(+id, updateVisachecklistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visachecklistService.remove(+id);
  }
}
