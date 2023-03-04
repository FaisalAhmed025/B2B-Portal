import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReissueDto } from './dto/create-reissue.dto';
import { UpdateReissueDto } from './dto/update-reissue.dto';
import { Reissue } from './entities/reissue.entity';

@Injectable()
export class ReissueService {

  constructor(@InjectRepository(Reissue)
  private ReissueRepo:Repository<Reissue>){}


  create(createReissueDto: CreateReissueDto) {
    const creatReissue = this.ReissueRepo.create(createReissueDto)
    return this.ReissueRepo.save(creatReissue);
  }

  findAll() {
    return this.ReissueRepo.find({});
  }

  findOne(Id: number) {
    return this.ReissueRepo.findOneBy({Id});
  }

  update(id: number, updateReissueDto: UpdateReissueDto) {
    return `This action updates a #${id} reissue`;
  }

  remove(Id: number) {
    return this.ReissueRepo.delete(Id);
  }
}
