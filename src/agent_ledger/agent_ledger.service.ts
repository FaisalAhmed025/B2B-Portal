import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createAgentLedgerDto } from './dto/create-agent_ledger.dto';
import { UpdateAgentLedgerDto } from './dto/update-agent_ledger.dto';
import { AgentLedger } from './entities/agent_ledger.entity';

@Injectable()
export class AgentLedgerService {
  constructor(@InjectRepository(AgentLedger) private agentLedgerRepo:Repository<AgentLedger>){}
  
  
 async create(CreateDto:createAgentLedgerDto) {
    const createAgentL = await this.agentLedgerRepo.create(CreateDto)
    return  this.agentLedgerRepo.save(createAgentL);
  }

 async findAll() {
    return  await this.agentLedgerRepo.find({});
  }

  async findOne(Id: number) {
    const ledger = await this.agentLedgerRepo.findOneBy({Id});
    if(!ledger){
      throw new HttpException(`User Id  ${Id} does not exixt`, HttpStatus.NOT_FOUND)
    }else
    return ledger;
  }

  async update(Id: number, updateAgentLedgerDto: UpdateAgentLedgerDto) {
    const agentledger = await this.findOne(Id)
    agentledger.agentSubId =updateAgentLedgerDto.AgentSubId
    agentledger.createdAt =updateAgentLedgerDto.CreatedAt
    agentledger.actionBy =updateAgentLedgerDto.ActionBy
    agentledger.staffId =updateAgentLedgerDto.StaffId
    agentledger.deposit =updateAgentLedgerDto.Deposit
    agentledger.purchase =updateAgentLedgerDto.Purchase
    agentledger.loan =updateAgentLedgerDto.Loan
    agentledger.returnMoney =updateAgentLedgerDto.ReturnMoney
    agentledger.void =updateAgentLedgerDto.Void
    agentledger.refund =updateAgentLedgerDto.Refund
    agentledger.refund =updateAgentLedgerDto.Reissue
    agentledger.others =updateAgentLedgerDto.Others
    agentledger.servicefee =updateAgentLedgerDto.Servicefee
    agentledger.lastAmount =updateAgentLedgerDto.LastAmount
    agentledger.transactionId =updateAgentLedgerDto.TransactionId
    agentledger.details =updateAgentLedgerDto.Details
    agentledger.reference =updateAgentLedgerDto.Reference
    const updatedagent = await this.agentLedgerRepo.save(agentledger)
    return updatedagent;

  }

  remove(Id: number) {
    return this.agentLedgerRepo.delete(Id);
  }
}
