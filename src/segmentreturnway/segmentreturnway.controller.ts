import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SegmentreturnwayService } from './segmentreturnway.service';
import { CreateSegmentreturnwayDto } from './dto/create-segmentreturnway.dto';
import { UpdateSegmentreturnwayDto } from './dto/update-segmentreturnway.dto';

@Controller('segmentreturnway')
export class SegmentreturnwayController {
  constructor(private readonly segmentreturnwayService: SegmentreturnwayService) {}

  @Post('CreateSegmentReturnWay')
  create(@Body() createSegmentreturnwayDto: CreateSegmentreturnwayDto) {
    return this.segmentreturnwayService.create(createSegmentreturnwayDto);
  }

  @Get('AllReturnWay')
  findAll() {
    return this.segmentreturnwayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.segmentreturnwayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSegmentreturnwayDto: UpdateSegmentreturnwayDto) {
    return this.segmentreturnwayService.update(+id, updateSegmentreturnwayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.segmentreturnwayService.remove(+id);
  }
}
