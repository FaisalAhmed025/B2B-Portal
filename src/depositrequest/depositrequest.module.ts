import { Module } from '@nestjs/common';
import { DepositrequestService } from './depositrequest.service';
import { DepositrequestController } from './depositrequest.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depositrequest } from './entities/depositrequest.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Depositrequest])],
  controllers: [DepositrequestController],
  providers: [DepositrequestService]
})
export class DepositrequestModule {}
