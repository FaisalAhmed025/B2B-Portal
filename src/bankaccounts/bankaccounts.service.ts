import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBankaccountDto } from './dto/create-bankaccount.dto';
import { UpdateBankaccountDto } from './dto/update-bankaccount.dto';
import { Bankaccounts } from './entities/bankaccount.entity';

@Injectable()
export class BankaccountsService {
  constructor(@InjectRepository(Bankaccounts)
  private bankaccountRepo:Repository<Bankaccounts>){}

  create(createBankaccountDto: CreateBankaccountDto) {

    const CreatBank= this.bankaccountRepo.create(createBankaccountDto)
    const addbank = this.bankaccountRepo.save(CreatBank)
    return addbank ;
  }

  findAll() {
    return this.bankaccountRepo.find({});
  }

  findOne(Id: number) {
    return this.bankaccountRepo.findOneBy({Id});
  }

  async update(Id: number, updateBankaccountDto: UpdateBankaccountDto) {
    const bank= await this.findOne(Id)

    bank.AgentId = updateBankaccountDto.AgentId
    bank.AccountName= updateBankaccountDto.AccountName
    bank.BankName= updateBankaccountDto.BankName
    bank.AccountNumber=updateBankaccountDto.AccountNumber
    bank.Branch =updateBankaccountDto.Branch
    bank.Swift =updateBankaccountDto.Swift
    bank.Address= updateBankaccountDto.Address
    bank.Routing = updateBankaccountDto.Routing
    bank.CreatedAt =updateBankaccountDto.CreatedAt

    const updatedBank = await this.bankaccountRepo.save(bank)
    return updatedBank;
  }

  remove(Id: number) {
    return this.bankaccountRepo.delete({Id});
  }
}
