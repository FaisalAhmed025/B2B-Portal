import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepositrequestDto } from './dto/create-depositrequest.dto';
import { UpdateDepositrequestDto } from './dto/update-depositrequest.dto';
import { Depositrequest } from './entities/depositrequest.entity';

@Injectable()
export class DepositrequestService {
  constructor(@InjectRepository(Depositrequest)
  private depositerequestRepo:Repository<Depositrequest>){}

  create(createDepositrequestDto: CreateDepositrequestDto) {
    const createdepoRequest = this.depositerequestRepo.create(createDepositrequestDto)
    return this.depositerequestRepo.save(createDepositrequestDto);
  }

  findAll() {
    return this.depositerequestRepo.find() ;
  }

  findOne(Id: number) {
    return this.depositerequestRepo.findOneBy({Id});
  }

  update(id: number, updateDepositrequestDto: UpdateDepositrequestDto) {
    return ;
  }

  remove(Id: number) {
    return this.depositerequestRepo.delete({Id});
  }
}
