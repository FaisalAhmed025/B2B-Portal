import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSegmentreturnwayDto } from './dto/create-segmentreturnway.dto';
import { UpdateSegmentreturnwayDto } from './dto/update-segmentreturnway.dto';
import { Segmentreturnway } from './entities/segmentreturnway.entity';

@Injectable()
export class SegmentreturnwayService {

  constructor(@InjectRepository(Segmentreturnway)
  private segmentreturnwayRepo:Repository<Segmentreturnway>){}

  create(createSegmentreturnwayDto: CreateSegmentreturnwayDto) {
    const SegmentReturnway = this.segmentreturnwayRepo.create(createSegmentreturnwayDto)
    return this.segmentreturnwayRepo.save(SegmentReturnway) ;
  }

  findAll() {
    return this.segmentreturnwayRepo.find({});
  }

  findOne(Id: number) {
    return this.segmentreturnwayRepo.findOneBy({Id});
  }

  update(id: number, updateSegmentreturnwayDto: UpdateSegmentreturnwayDto) {
    return `This action updates a #${id} segmentreturnway`;
  }

  remove(Id: number) {
    return this.segmentreturnwayRepo.delete(Id);
  }
}
