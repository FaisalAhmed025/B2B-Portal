import { Module } from '@nestjs/common';
import { FailedbookingService } from './failedbooking.service';
import { FailedbookingController } from './failedbooking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Failedbooking } from './entities/failedbooking.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Failedbooking])],
  controllers: [FailedbookingController],
  providers: [FailedbookingService]
})
export class FailedbookingModule {}
