import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StafflistService } from './stafflist.service';
import { CreateStafflistDto } from './dto/create-stafflist.dto';
import { UpdateStafflistDto } from './dto/update-stafflist.dto';

@Controller('stafflist')
export class StafflistController {
  constructor(private readonly stafflistService: StafflistService) {}

  @Post('createstaff')
  create(@Body() createStafflistDto: CreateStafflistDto) {
    return this.stafflistService.create(createStafflistDto);
  }

  @Get('getallastaff')
  findAll() {
    return this.stafflistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stafflistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStafflistDto: UpdateStafflistDto) {
    return this.stafflistService.update(+id, updateStafflistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stafflistService.remove(+id);
  }
}
