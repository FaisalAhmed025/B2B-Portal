import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AllairportService } from './allairport.service';
import { CreateAllairportDto } from './dto/create-allairport.dto';
import { UpdateAllairportDto } from './dto/update-allairport.dto';

@Controller('allairport')
export class AllairportController {
  constructor(private readonly allairportService: AllairportService) {}

  @Post('crate')
  create(@Body() createAllairportDto: CreateAllairportDto) {
    return this.allairportService.create(createAllairportDto);
  }

  @Get('GetAllAirports')
  findAll() {
    return this.allairportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.allairportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAllairportDto: UpdateAllairportDto) {
    return this.allairportService.update(+id, updateAllairportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allairportService.remove(+id);
  }
}
