import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgentFailedDto } from './dto/create-agent_failed.dto';
import { UpdateAgentFailedDto } from './dto/update-agent_failed.dto';
import { AgentFailed } from './entities/agent_failed.entity';

@Injectable()
export class AgentFailedService {
  constructor(@InjectRepository(AgentFailed) private agentfailedRepo:Repository<AgentFailed>){}
  
  create(createAgentFailedDto: CreateAgentFailedDto) {
    const newagent = this.agentfailedRepo.create(createAgentFailedDto)
    return this.agentfailedRepo.save(newagent);
  }

  
  findAll() {
    return this.agentfailedRepo.find({});
  }

  findOne(Id: number) {
    return this.agentfailedRepo.findOneBy({Id}) ;
  }

  async update(id: number, updateAgentFailedtDto: UpdateAgentFailedDto) {

    const agentfailed = await this.findOne(id)

    agentfailed.Name =updateAgentFailedtDto.Name
    agentfailed.Password =updateAgentFailedtDto.Password
    agentfailed.Phone =updateAgentFailedtDto.Phone
    agentfailed.JoinAt=updateAgentFailedtDto.JoinAt
    agentfailed.Status= updateAgentFailedtDto.Status
    agentfailed.Company=updateAgentFailedtDto.Company
    agentfailed.CompanyAdd =updateAgentFailedtDto.CompanyAdd

    const newagent = await this.agentfailedRepo.save(agentfailed)
    return newagent;


  }

  remove(Id: number) {
    return this.agentfailedRepo.delete({Id});
  }
}
