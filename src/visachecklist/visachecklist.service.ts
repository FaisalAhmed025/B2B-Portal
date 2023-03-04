import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVisachecklistDto } from './dto/create-visachecklist.dto';
import { UpdateVisachecklistDto } from './dto/update-visachecklist.dto';
import { Visachecklist } from './entities/visachecklist.entity';

@Injectable()
export class VisachecklistService {
  constructor(@InjectRepository(Visachecklist)
  private vischeckRepo:Repository<Visachecklist>){}


  create(createVisachecklistDto: CreateVisachecklistDto) {
    return 'This action adds a new visachecklist';
  }

  findAll() {
    return this.vischeckRepo.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} visachecklist`;
  }

  update(id: number, updateVisachecklistDto: UpdateVisachecklistDto) {
    return `This action updates a #${id} visachecklist`;
  }

  remove(id: number) {
    return `This action removes a #${id} visachecklist`;
  }
}
