import { Module } from '@nestjs/common';
import { BankaccountsService } from './bankaccounts.service';
import { BankaccountsController } from './bankaccounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bankaccounts } from './entities/bankaccount.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Bankaccounts])],
  controllers: [BankaccountsController],
  providers: [BankaccountsService]
})
export class BankaccountsModule {}
