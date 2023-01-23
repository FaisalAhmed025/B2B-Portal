import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LastloginService } from './lastlogin.service';
import { CreateLastloginDto } from './dto/create-lastlogin.dto';
import { UpdateLastloginDto } from './dto/update-lastlogin.dto';

@Controller('lastlogin')
export class LastloginController {
  constructor(private readonly lastloginService: LastloginService) {}

  @Post()
  create(@Body() createLastloginDto: CreateLastloginDto) {
    return this.lastloginService.create(createLastloginDto);
  }

  @Get('getalllastlogin')
  findAll() {
    return this.lastloginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lastloginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLastloginDto: UpdateLastloginDto) {
    return this.lastloginService.update(+id, updateLastloginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lastloginService.remove(+id);
  }
}
