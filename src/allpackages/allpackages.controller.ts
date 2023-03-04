import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AllpackagesService } from './allpackages.service';
import { CreateAllpackageDto } from './dto/create-allpackage.dto';
import { UpdateAllpackageDto } from './dto/update-allpackage.dto';

@Controller('allpackages')
export class AllpackagesController {
  constructor(private readonly allpackagesService: AllpackagesService) {}

  @Post('craetepackage')
  create(@Body() createAllpackageDto: CreateAllpackageDto) {
    return this.allpackagesService.create(createAllpackageDto);
  }

  @Get('Allpackages')
  findAll() {
    return this.allpackagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.allpackagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAllpackageDto: UpdateAllpackageDto) {
    return this.allpackagesService.update(+id, updateAllpackageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allpackagesService.remove(+id);
  }
}
