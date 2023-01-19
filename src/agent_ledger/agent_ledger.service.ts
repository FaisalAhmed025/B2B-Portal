import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createAgentLedgerDto } from './dto/create-agent_ledger.dto';
import { UpdateAgentLedgerDto } from './dto/update-agent_ledger.dto';
import { AgentLedger } from './entities/agent_ledger.entity';

@Injectable()
export class AgentLedgerService {
  constructor(@InjectRepository(AgentLedger) private agentLedgerRepo:Repository<AgentLedger>){}
  
  
  create(CreateDto:createAgentLedgerDto) {
    const createAgentL = this.agentLedgerRepo.create(CreateDto)
    return  this.agentLedgerRepo.save(createAgentL);
  }

  findAll() {
    return this.agentLedgerRepo.find({});
  }

  findOne(id: number) {
    return  this.agentLedgerRepo.findOneBy({id});
  }

  async update(id: number, updateAgentLedgerDto: UpdateAgentLedgerDto) {
    const agentledger = await this.findOne(id)

    agentledger.agentSubId =updateAgentLedgerDto.agentSubId
    agentledger.createdAt =updateAgentLedgerDto.createdAt
    agentledger.actionBy =updateAgentLedgerDto.actionBy
    agentledger.staffId =updateAgentLedgerDto.staffId
    agentledger.deposit =updateAgentLedgerDto.deposit
    agentledger.purchase =updateAgentLedgerDto.purchase
    agentledger.loan =updateAgentLedgerDto.loan
    agentledger.returnMoney =updateAgentLedgerDto.returnMoney
    agentledger.void =updateAgentLedgerDto.void
    agentledger.refund =updateAgentLedgerDto.refund
    agentledger.refund =updateAgentLedgerDto.reissue
    agentledger.others =updateAgentLedgerDto.others
    agentledger.servicefee =updateAgentLedgerDto.servicefee
    agentledger.lastAmount =updateAgentLedgerDto.lastAmount
    agentledger.transactionId =updateAgentLedgerDto.transactionId
    agentledger.details =updateAgentLedgerDto.details
    agentledger.reference =updateAgentLedgerDto.reference

    const updatedagent = await this.agentLedgerRepo.save(agentledger)
    return updatedagent;

  }

  remove(id: number) {
    return this.agentLedgerRepo.delete({id});
  }
}
