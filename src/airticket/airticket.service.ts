import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAirticketDto } from './dto/create-airticket.dto';
import { UpdateAirticketDto } from './dto/update-airticket.dto';
import { Airticket } from './entities/airticket.entity';

@Injectable()
export class AirticketService {
  constructor(@InjectRepository(Airticket)
  private airticketRepository:Repository<Airticket>){}

  create(createAirticketDto: CreateAirticketDto) {
    const airticket = this.airticketRepository.create(createAirticketDto)
    return this.airticketRepository.save(airticket);
  }

  findAll() {
    return this.airticketRepository.find({});
  }

  findOne(Id: number) {
    return this.airticketRepository.findOneBy({Id});
  }

   async update(Id: number, updateAirticketDto: UpdateAirticketDto) {

    const ticket= await this.findOne(Id)
    ticket.AgentId=updateAirticketDto.AgentId
    ticket.AddedTime=updateAirticketDto.AddedTime
    ticket.AirlinesPnr=updateAirticketDto.AirlinesPnr
    ticket.BookingId=updateAirticketDto.BookingId
    ticket.EticketNo= updateAirticketDto.EticketNo
    ticket.FlightDate=updateAirticketDto.FlightDate
    ticket.InvoiceId=updateAirticketDto.InvoiceId
    ticket.PasengerType=updateAirticketDto.PasengerType
    ticket.SystemPnr=updateAirticketDto.SystemPnr
    const updatedticket = await this.airticketRepository.save(ticket)
    return updatedticket;
  }

  remove(Id: number) {
    return this.airticketRepository.delete({Id}) ;
  }
}
