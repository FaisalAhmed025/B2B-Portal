import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { Passengers } from './entities/passenger.entity';

@Injectable()
export class PassengersService {

  constructor(@InjectRepository(Passengers)
  private passengerRepo:Repository<Passengers>){}

  create(createPassengerDto: CreatePassengerDto) {
    const passenger = this.passengerRepo.create(createPassengerDto)
    return this.passengerRepo.save(passenger);
  }

  findAll() {
    return this.passengerRepo.find({});
  }

  findOne(Id: number) {
    return this.passengerRepo.findOneBy({Id}) ;
  }

  async update(Id: number, updatePassengerDto: UpdatePassengerDto) {
    const passenger = await this.findOne(Id)

    passenger.Address= updatePassengerDto.Address
    passenger.AgentId= updatePassengerDto.AgentId
    passenger.PaxId= updatePassengerDto.PaxId
    passenger.BookingId =updatePassengerDto.BookingId
    passenger.Pnr =updatePassengerDto.Pnr
    passenger.Prefix = updatePassengerDto.Prefix
    passenger.Fname =updatePassengerDto.Fname
    passenger.Lname =updatePassengerDto.Lname
    passenger.Dob= updatePassengerDto.Dob
    passenger.PassportCopy =updatePassengerDto.PassportCopy
    passenger.Uid =updatePassengerDto.Uid

    const updatedpassenger = await this.passengerRepo.save(passenger)
    return updatedpassenger;
  }

  remove(Id: number) {
    return  this.passengerRepo.delete(Id);
  }
}
