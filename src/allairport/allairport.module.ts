import { Module } from '@nestjs/common';
import { AllairportService } from './allairport.service';
import { AllairportController } from './allairport.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Allairport } from './entities/allairport.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Allairport])],
  controllers: [AllairportController],
  providers: [AllairportService]
})
export class AllairportModule {}
