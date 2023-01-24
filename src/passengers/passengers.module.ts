import { Module } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { PassengersController } from './passengers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passengers } from './entities/passenger.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Passengers])],
  controllers: [PassengersController],
  providers: [PassengersService]
})
export class PassengersModule {}
