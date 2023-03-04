import { Module } from '@nestjs/common';
import { RefundService } from './refund.service';
import { RefundController } from './refund.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Refund } from './entities/refund.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Refund])],
  controllers: [RefundController],
  providers: [RefundService]
})
export class RefundModule {}
