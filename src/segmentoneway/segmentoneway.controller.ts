import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SegmentonewayService } from './segmentoneway.service';
import { CreateSegmentonewayDto } from './dto/create-segmentoneway.dto';
import { UpdateSegmentonewayDto } from './dto/update-segmentoneway.dto';

@Controller('segmentoneway')
export class SegmentonewayController {
  constructor(private readonly segmentonewayService: SegmentonewayService) {}

  @Post('createsegmentoneway')
  create(@Body() createSegmentonewayDto: CreateSegmentonewayDto) {
    return this.segmentonewayService.create(createSegmentonewayDto);
  }

  @Get('allsegmentoneway')
  findAll() {
    return this.segmentonewayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.segmentonewayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSegmentonewayDto: UpdateSegmentonewayDto) {
    return this.segmentonewayService.update(+id, updateSegmentonewayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.segmentonewayService.remove(+id);
  }
}
