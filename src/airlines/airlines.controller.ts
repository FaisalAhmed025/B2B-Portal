import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AirlinesService } from './airlines.service';
import { CreateAirlineDto } from './dto/create-airline.dto';
import { UpdateAirlineDto } from './dto/update-airline.dto';

@Controller('airlines')
export class AirlinesController {
  constructor(private readonly airlinesService: AirlinesService) {}

  @Post()
  create(@Body() createAirlineDto: CreateAirlineDto) {
    return this.airlinesService.create(createAirlineDto);
  }

  @Get()
  findAll() {
    return this.airlinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airlinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAirlineDto: UpdateAirlineDto) {
    return this.airlinesService.update(+id, updateAirlineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.airlinesService.remove(+id);
  }
}
