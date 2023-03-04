import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepositrequestService } from './depositrequest.service';
import { CreateDepositrequestDto } from './dto/create-depositrequest.dto';
import { UpdateDepositrequestDto } from './dto/update-depositrequest.dto';

@Controller('depositrequest')
export class DepositrequestController {
  constructor(private readonly depositrequestService: DepositrequestService) {}

  @Post('CreateDepositRequest')
  create(@Body() createDepositrequestDto: CreateDepositrequestDto) {
    return this.depositrequestService.create(createDepositrequestDto);
  }

  @Get('GetAllDepositRequest')
  findAll() {
    return this.depositrequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depositrequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepositrequestDto: UpdateDepositrequestDto) {
    return this.depositrequestService.update(+id, updateDepositrequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depositrequestService.remove(+id);
  }
}
