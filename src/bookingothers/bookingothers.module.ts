import { Module } from '@nestjs/common';
import { BookingothersService } from './bookingothers.service';
import { BookingothersController } from './bookingothers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookingothers } from './entities/bookingother.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Bookingothers])],
  controllers: [BookingothersController],
  providers: [BookingothersService]
})
export class BookingothersModule {}
