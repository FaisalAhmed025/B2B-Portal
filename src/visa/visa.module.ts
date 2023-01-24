import { Module } from '@nestjs/common';
import { VisaService } from './visa.service';
import { VisaController } from './visa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visa } from './entities/visa.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Visa])],
  controllers: [VisaController],
  providers: [VisaService]
})
export class VisaModule {}
