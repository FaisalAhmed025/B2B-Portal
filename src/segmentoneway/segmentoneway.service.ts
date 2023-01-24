import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSegmentonewayDto } from './dto/create-segmentoneway.dto';
import { UpdateSegmentonewayDto } from './dto/update-segmentoneway.dto';
import { Segmentoneway } from './entities/segmentoneway.entity';

@Injectable()
export class SegmentonewayService {
  constructor(@InjectRepository(Segmentoneway)
  private segmentOneWay:Repository<Segmentoneway>){}


  create(createSegmentonewayDto: CreateSegmentonewayDto) {
    const segmentoneway = this.segmentOneWay.create(createSegmentonewayDto)
    return this.segmentOneWay.save(segmentoneway);
  }

  findAll() {
    return this.segmentOneWay.find({});
  }

  findOne(Id: number) {
    return this.segmentOneWay.findOneBy({Id});
  }

  
  update(id: number, updateSegmentonewayDto: UpdateSegmentonewayDto) {
    return `This action updates a #${id} segmentoneway`;
  }

  remove(Id: number) {
    return this.segmentOneWay.delete(Id);
  }
}
