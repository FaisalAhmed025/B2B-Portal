import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVoidDto } from './dto/create-void.dto';
import { UpdateVoidDto } from './dto/update-void.dto';
import { Void } from './entities/void.entity';

@Injectable()
export class VoidService {
  constructor(@InjectRepository(Void)
  private voidRepo:Repository<Void>){}
  create(createVoidDto: CreateVoidDto) {
    return 'This action adds a new void';
  }

  findAll() {
    return this.voidRepo.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} void`;
  }

  update(id: number, updateVoidDto: UpdateVoidDto) {
    return `This action updates a #${id} void`;
  }

  remove(id: number) {
    return `This action removes a #${id} void`;
  }
}
