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

  findOne(id: number) {
    return this.agentfailedRepo.findOneBy({id}) ;
  }

  async update(id: number, updateAgentFailedtDto: UpdateAgentFailedDto) {

    const agentfailed = await this.findOne(id)

    agentfailed.name =updateAgentFailedtDto.name
    agentfailed.password =updateAgentFailedtDto.password
    agentfailed.phone =updateAgentFailedtDto.phone
    agentfailed.joinAt=updateAgentFailedtDto.joinAt
    agentfailed.status= updateAgentFailedtDto.status
    agentfailed.company=updateAgentFailedtDto.company
    agentfailed.companyadd =updateAgentFailedtDto.companyadd

    const newagent = await this.agentfailedRepo.save(agentfailed)
    return newagent;


  }

  remove(id: number) {
    return this.agentfailedRepo.delete({id});
  }
}
