import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFailedbookingDto } from './dto/create-failedbooking.dto';
import { UpdateFailedbookingDto } from './dto/update-failedbooking.dto';
import { Failedbooking } from './entities/failedbooking.entity';

@Injectable()
export class FailedbookingService {

  constructor(@InjectRepository(Failedbooking)
  private FailedBookingRepo:Repository<Failedbooking>){}

  create(createFailedbookingDto: CreateFailedbookingDto) {
    return 'This action adds a new failedbooking';
  }

  findAll() {
    return this.FailedBookingRepo.find({});
  }

  findOne(Id: number) {
    return this.FailedBookingRepo.findOneBy({Id});
  }

  update(id: number, updateFailedbookingDto: UpdateFailedbookingDto) {
    return `This action updates a #${id} failedbooking`;
  }

  remove(Id: number) {
    return this.FailedBookingRepo.delete({Id});
  }
}
