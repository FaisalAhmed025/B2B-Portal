import { Module } from '@nestjs/common';
import { AllairlinesService } from './allairlines.service';
import { AllairlinesController } from './allairlines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Allairlines } from './entities/allairline.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Allairlines])],
  controllers: [AllairlinesController],
  providers: [AllairlinesService]
})
export class AllairlinesModule {}
