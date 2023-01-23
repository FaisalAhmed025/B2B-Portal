import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookingotherDto } from './dto/create-bookingother.dto';
import { UpdateBookingotherDto } from './dto/update-bookingother.dto';
import { Bookingothers } from './entities/bookingother.entity';

@Injectable()
export class BookingothersService {
  constructor(@InjectRepository(Bookingothers)
  private bookingothersRepo:Repository<Bookingothers>){}
  create(createBookingotherDto: CreateBookingotherDto) {
    const createBookingOthers= this.bookingothersRepo.create(createBookingotherDto)
    return this.bookingothersRepo.save(createBookingOthers)
  }

  findAll() {
    return this.bookingothersRepo.find({});
  }

  findOne(Id: number) {
    return this.bookingothersRepo.findOneBy({Id});
  }

  async update(Id: number, updateBookingotherDto: UpdateBookingotherDto) {

    const bookingothers= await this.findOne(Id)

    bookingothers.AgentId=updateBookingotherDto.AgentId
    bookingothers.Amount=updateBookingotherDto.Amount
    bookingothers.Attachment=updateBookingotherDto.Attachment
    bookingothers.CompanyName=updateBookingotherDto.CompanyName
    bookingothers.CompanyPhone= updateBookingotherDto.CompanyPhone
    bookingothers.CreatedAt=updateBookingotherDto.CreatedAt
    bookingothers.CreatedBy=updateBookingotherDto.CreatedBy
    bookingothers.Description =updateBookingotherDto.Description
    bookingothers.Reference=updateBookingotherDto.Reference
    bookingothers.ServiceType=updateBookingotherDto.ServiceType

    const updatedBoOthers= await this.bookingothersRepo.save(bookingothers)
    return updatedBoOthers;
  }

  remove(Id: number) {
    return this.bookingothersRepo.delete({Id});
  }
}
