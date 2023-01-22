import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AirticketService } from './airticket.service';
import { CreateAirticketDto } from './dto/create-airticket.dto';
import { UpdateAirticketDto } from './dto/update-airticket.dto';

@Controller('airticket')
export class AirticketController {
  constructor(private readonly airticketService: AirticketService) {}

  @Post('createairticket')
  create(@Body() createAirticketDto: CreateAirticketDto) {
    return this.airticketService.create(createAirticketDto);
  }

  @Get('allairticket')
  findAll() {
    return this.airticketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airticketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAirticketDto: UpdateAirticketDto) {
    return this.airticketService.update(+id, updateAirticketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.airticketService.remove(+id);
  }
}
