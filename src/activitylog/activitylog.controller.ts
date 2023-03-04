import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitylogService } from './activitylog.service';
import { CreateActivitylogDto } from './dto/create-activitylog.dto';
import { UpdateActivitylogDto } from './dto/update-activitylog.dto';

@Controller('activitylog')
export class ActivitylogController {
  constructor(private readonly activitylogService: ActivitylogService) {}

  @Post()
  create(@Body() createActivitylogDto: CreateActivitylogDto) {
    return this.activitylogService.create(createActivitylogDto);
  }

  @Get('allactivitylog')
  async findAll() {
    const log= await this.activitylogService.findAll();
    return log;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitylogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivitylogDto: UpdateActivitylogDto) {
    return this.activitylogService.update(+id, updateActivitylogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitylogService.remove(+id);
  }
}
