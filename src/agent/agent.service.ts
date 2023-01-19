import { Injectable } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { Agent } from './entities/agent.entity';


@Injectable()
export class AgentService {
  constructor(@InjectRepository(Agent) private agentrepository:Repository <Agent>){}

  create(createAgentDto: CreateAgentDto) {
    const newagent = this.agentrepository.create(createAgentDto)
    return this.agentrepository.save(newagent);
  }

  findAll() {
    return this.agentrepository.find({});
  }

  findOne(id: number) {
    return this.agentrepository.findOneBy({id});
  }

  async update(id: number, updateAgentDto: UpdateAgentDto) {
    const agent = await this.findOne(id)
    agent.agentId =updateAgentDto.agentId
    agent.name =updateAgentDto.name
    agent.password =updateAgentDto.password
    agent.phone =updateAgentDto.phone
    agent.joinAt =updateAgentDto.joinAt
    agent.status =updateAgentDto.status
    agent.isActive=updateAgentDto.isActive
    agent.company =updateAgentDto.company
    agent.companyImage =updateAgentDto.companyImage
    agent.companyadd =updateAgentDto.companyadd
    agent.bonus=updateAgentDto.bonus
    agent.credit=updateAgentDto.credit
    agent.browser=updateAgentDto.browser
    agent.area =updateAgentDto.area
    agent.platform=updateAgentDto.platform
    agent.markup=updateAgentDto.markup
    agent.loginIp=updateAgentDto.loginIp
    agent.logoPermission=updateAgentDto.logoPermission
    const updateagent =this.agentrepository.save(agent)
    return updateagent;
  }

  remove(id: number) {
    const deleteagent = this.agentrepository.delete(id)
    return `the userID ${id} is deleted succesfully`;
  }
}
