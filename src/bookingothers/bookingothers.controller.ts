import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingothersService } from './bookingothers.service';
import { CreateBookingotherDto } from './dto/create-bookingother.dto';
import { UpdateBookingotherDto } from './dto/update-bookingother.dto';

@Controller('bookingothers')
export class BookingothersController {
  constructor(private readonly bookingothersService: BookingothersService) {}

  @Post('AddBookingOthers')
  create(@Body() createBookingotherDto: CreateBookingotherDto) {
    return this.bookingothersService.create(createBookingotherDto);
  }

  @Get("AllBookingOthers")
  findAll() {
    return this.bookingothersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingothersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingotherDto: UpdateBookingotherDto) {
    return this.bookingothersService.update(+id, updateBookingotherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingothersService.remove(+id);
  }
}
