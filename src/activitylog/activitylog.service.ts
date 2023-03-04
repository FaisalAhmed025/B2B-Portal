import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActivitylogDto } from './dto/create-activitylog.dto';
import { UpdateActivitylogDto } from './dto/update-activitylog.dto';
import { Activitylog } from './entities/activitylog.entity';

@Injectable()
export class ActivitylogService {
  constructor(@InjectRepository(Activitylog)
  private activityLogRepo:Repository<Activitylog>){}

  create(createActivitylogDto: CreateActivitylogDto) {
    return 'This action adds a new activitylog';
  }

  async findAll() {
    const log = await this.activityLogRepo.find({})
    return log;
  }

  findOne(id: number) {
    return `This action returns a #${id} activitylog`;
  }

  update(id: number, updateActivitylogDto: UpdateActivitylogDto) {
    return `This action updates a #${id} activitylog`;
  }

  remove(id: number) {
    return `This action removes a #${id} activitylog`;
  }
}
