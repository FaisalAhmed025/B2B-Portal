import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';
import { Control } from './entities/control.entity';

@Injectable()
export class ControlService {
  constructor(@InjectRepository(Control)
  private ControlRepo:Repository<Control>){}


  create(createControlDto: CreateControlDto) {
    const createControl = this.ControlRepo.create(createControlDto)
    return this.ControlRepo.save(createControl)   
  }

  findAll() {
    return this.ControlRepo.find();
  }

  findOne(Id: number) {
    return this.ControlRepo.findOneBy({Id}) ;
  }

  update(id: number, updateControlDto: UpdateControlDto) {
    return `This action updates a #${id} control`;
  }

  remove(Id: number) {
    return this.ControlRepo.delete(Id);
  }
}
