import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FailedbookingService } from './failedbooking.service';
import { CreateFailedbookingDto } from './dto/create-failedbooking.dto';
import { UpdateFailedbookingDto } from './dto/update-failedbooking.dto';

@Controller('failedbooking')
export class FailedbookingController {
  constructor(private readonly failedbookingService: FailedbookingService) {}

  @Post()
  create(@Body() createFailedbookingDto: CreateFailedbookingDto) {
    return this.failedbookingService.create(createFailedbookingDto);
  }

  @Get('GetAllFailedBooking')
  findAll() {
    return this.failedbookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.failedbookingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFailedbookingDto: UpdateFailedbookingDto) {
    return this.failedbookingService.update(+id, updateFailedbookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.failedbookingService.remove(+id);
  }
}
