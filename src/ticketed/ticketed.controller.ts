import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketedService } from './ticketed.service';
import { CreateTicketedDto } from './dto/create-ticketed.dto';
import { UpdateTicketedDto } from './dto/update-ticketed.dto';

@Controller('ticketed')
export class TicketedController {
  constructor(private readonly ticketedService: TicketedService) {}

  @Post('createticket')
  create(@Body() createTicketedDto: CreateTicketedDto) {
    return this.ticketedService.create(createTicketedDto);
  }

  @Get('getallticketed')
  findAll() {
    return this.ticketedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketedDto: UpdateTicketedDto) {
    return this.ticketedService.update(+id, updateTicketedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketedService.remove(+id);
  }
}
