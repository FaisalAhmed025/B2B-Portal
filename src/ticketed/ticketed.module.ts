import { Module } from '@nestjs/common';
import { TicketedService } from './ticketed.service';
import { TicketedController } from './ticketed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticketed } from './entities/ticketed.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Ticketed])],
  controllers: [TicketedController],
  providers: [TicketedService]
})
export class TicketedModule {}
