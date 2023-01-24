import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVisainfoDto } from './dto/create-visainfo.dto';
import { UpdateVisainfoDto } from './dto/update-visainfo.dto';
import { Visainfo } from './entities/visainfo.entity';

@Injectable()
export class VisainfoService {
  constructor(@InjectRepository(Visainfo)
  private visaInfoRepo:Repository<Visainfo>){}


  create(createVisainfoDto: CreateVisainfoDto) {
    return 'This action adds a new visainfo';
  }

  findAll() {
    return this.visaInfoRepo.find({})
  }

  findOne(id: number) {
    return `This action returns a #${id} visainfo`;
  }

  update(id: number, updateVisainfoDto: UpdateVisainfoDto) {
    return `This action updates a #${id} visainfo`;
  }

  remove(Id: number) {
    return this.visaInfoRepo.delete(Id);
  }
}
