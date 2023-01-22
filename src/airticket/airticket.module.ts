import { Module } from '@nestjs/common';
import { AirticketService } from './airticket.service';
import { AirticketController } from './airticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airticket } from './entities/airticket.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Airticket])],
  controllers: [AirticketController],
  providers: [AirticketService]
})
export class AirticketModule {}
