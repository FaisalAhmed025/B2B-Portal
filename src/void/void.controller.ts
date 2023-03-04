import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoidService } from './void.service';
import { CreateVoidDto } from './dto/create-void.dto';
import { UpdateVoidDto } from './dto/update-void.dto';

@Controller('void')
export class VoidController {
  constructor(private readonly voidService: VoidService) {}

  @Post()
  create(@Body() createVoidDto: CreateVoidDto) {
    return this.voidService.create(createVoidDto);
  }

  @Get('voidlist')
  findAll() {
    return this.voidService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voidService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoidDto: UpdateVoidDto) {
    return this.voidService.update(+id, updateVoidDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voidService.remove(+id);
  }
}
