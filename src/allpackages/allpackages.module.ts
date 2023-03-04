import { Module } from '@nestjs/common';
import { AllpackagesService } from './allpackages.service';
import { AllpackagesController } from './allpackages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Allpackages } from './entities/allpackage.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Allpackages])],
  controllers: [AllpackagesController],
  providers: [AllpackagesService]
})
export class AllpackagesModule {}
