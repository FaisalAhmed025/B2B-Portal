import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLastloginDto } from './dto/create-lastlogin.dto';
import { UpdateLastloginDto } from './dto/update-lastlogin.dto';
import { Lastlogin } from './entities/lastlogin.entity';

@Injectable()
export class LastloginService {
  constructor(@InjectRepository(Lastlogin)
  private lastloginRepo:Repository<Lastlogin>){}


  create(createLastloginDto: CreateLastloginDto) {
    return 'This action adds a new lastlogin';
  }

  findAll() {
    return this.lastloginRepo.find({});
  }

  findOne(Id: number) {
    return this.lastloginRepo.findOneBy({Id});
  }

  update(id: number, updateLastloginDto: UpdateLastloginDto) {
    return `This action updates a #${id} lastlogin`;
  }

  remove(Id: number) {
    return this.lastloginRepo.delete(Id);
  }
}
