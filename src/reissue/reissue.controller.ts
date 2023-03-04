import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReissueService } from './reissue.service';
import { CreateReissueDto } from './dto/create-reissue.dto';
import { UpdateReissueDto } from './dto/update-reissue.dto';

@Controller('reissue')
export class ReissueController {
  constructor(private readonly reissueService: ReissueService) {}

  @Post('CreateReissue')
  create(@Body() createReissueDto: CreateReissueDto) {
    return this.reissueService.create(createReissueDto);
  }

  @Get('GetAllIssues')
  findAll() {
    return this.reissueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reissueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReissueDto: UpdateReissueDto) {
    return this.reissueService.update(+id, updateReissueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reissueService.remove(+id);
  }
}
