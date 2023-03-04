import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControlService } from './control.service';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';

@Controller('control')
export class ControlController {
  constructor(private readonly controlService: ControlService) {}

  @Post('Create')
  create(@Body() createControlDto: CreateControlDto) {
    return this.controlService.create(createControlDto);
  }

  @Get('GetAllControl')
  findAll() {
    return this.controlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlDto: UpdateControlDto) {
    return this.controlService.update(+id, updateControlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlService.remove(+id);
  }
}
