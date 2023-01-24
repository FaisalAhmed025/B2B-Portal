import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisainfoService } from './visainfo.service';
import { CreateVisainfoDto } from './dto/create-visainfo.dto';
import { UpdateVisainfoDto } from './dto/update-visainfo.dto';

@Controller('visainfo')
export class VisainfoController {
  constructor(private readonly visainfoService: VisainfoService) {}

  @Post()
  create(@Body() createVisainfoDto: CreateVisainfoDto) {
    return this.visainfoService.create(createVisainfoDto);
  }

  @Get('getallvisainfo')
  findAll() {
    return this.visainfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visainfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisainfoDto: UpdateVisainfoDto) {
    return this.visainfoService.update(+id, updateVisainfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visainfoService.remove(+id);
  }
}
