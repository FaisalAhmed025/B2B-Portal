import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ForgetpasswordService } from './forgetpassword.service';
import { CreateForgetpasswordDto } from './dto/create-forgetpassword.dto';
import { UpdateForgetpasswordDto } from './dto/update-forgetpassword.dto';

@Controller('forgetpassword')
export class ForgetpasswordController {
  constructor(private readonly forgetpasswordService: ForgetpasswordService) {}

  @Post()
  create(@Body() createForgetpasswordDto: CreateForgetpasswordDto) {
    return this.forgetpasswordService.create(createForgetpasswordDto);
  }

  @Get('getallaforgetpass')
  findAll() {
    return this.forgetpasswordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forgetpasswordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateForgetpasswordDto: UpdateForgetpasswordDto) {
    return this.forgetpasswordService.update(+id, updateForgetpasswordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forgetpasswordService.remove(+id);
  }
}
