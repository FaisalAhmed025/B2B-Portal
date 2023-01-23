import { Module } from '@nestjs/common';
import { LastloginService } from './lastlogin.service';
import { LastloginController } from './lastlogin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lastlogin } from './entities/lastlogin.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Lastlogin])],
  controllers: [LastloginController],
  providers: [LastloginService]
})
export class LastloginModule {}
