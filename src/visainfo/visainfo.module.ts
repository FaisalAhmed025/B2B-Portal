import { Module } from '@nestjs/common';
import { VisainfoService } from './visainfo.service';
import { VisainfoController } from './visainfo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visainfo } from './entities/visainfo.entity';

@Module({

  imports:[TypeOrmModule.forFeature([Visainfo])],
  controllers: [VisainfoController],
  providers: [VisainfoService]
})
export class VisainfoModule {}
