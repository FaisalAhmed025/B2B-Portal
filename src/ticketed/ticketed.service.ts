import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTicketedDto } from './dto/create-ticketed.dto';
import { UpdateTicketedDto } from './dto/update-ticketed.dto';
import { Ticketed } from './entities/ticketed.entity';

@Injectable()
export class TicketedService {

  constructor(@InjectRepository(Ticketed)
  private TicketedRepo:Repository<Ticketed>){}

  create(createTicketedDto: CreateTicketedDto) {
    const createticket = this.TicketedRepo.create(createTicketedDto)
    return  this.TicketedRepo.save(createticket) ;
  }

  findAll() {
    return this.TicketedRepo.find({});
  }

  findOne(Id: number) {
    return this.TicketedRepo.findOneBy({Id});
  }

  update(id: number, updateTicketedDto: UpdateTicketedDto) {
    return `This action updates a #${id} ticketed`;
  }

  remove(Id: number) {
    return this.TicketedRepo.delete(Id);
  }
}
