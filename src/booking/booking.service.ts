import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingService {
  constructor(@InjectRepository(Booking)
  private bookingRepo:Repository<Booking>){}

  create(createBookingDto: CreateBookingDto) {
    const booking = this.bookingRepo.create(createBookingDto)
    return this.bookingRepo.save(booking);
  }

  findAll() {
    return this.bookingRepo.find({}) ;
  }

  findOne(Id: number) {
    return this.bookingRepo.findOneBy({Id}) ;
  }

  update(Id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${Id} booking`;
  }

  remove(Id: number) {
    return this.bookingRepo.delete({Id});
  }
}
