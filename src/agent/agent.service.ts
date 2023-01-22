import { Injectable } from '@nestjs/common';
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

  findOne(Id: number) {
    return this.agentrepository.findOneBy({Id});
  }

  async update(id: number, updateAgentDto: UpdateAgentDto) {
    const agent = await this.findOne(id)
    agent.AgentId =updateAgentDto.AgentId
    agent.Name =updateAgentDto.Name
    agent.Password =updateAgentDto.Password
    agent.Phone =updateAgentDto.Phone
    agent.JoinAt =updateAgentDto.JoinAt
    agent.Status =updateAgentDto.Status
    agent.IsActive=updateAgentDto.IsActive
    agent.Company =updateAgentDto.Company
    agent.CompanyImage =updateAgentDto.CompanyImage
    agent.Companyadd =updateAgentDto.Companyadd
    agent.Bonus=updateAgentDto.Bonus
    agent.Credit=updateAgentDto.Credit
    agent.Browser=updateAgentDto.Browser
    agent.Area =updateAgentDto.Area
    agent.Platform=updateAgentDto.Platform
    agent.Markup=updateAgentDto.Markup
    agent.LoginIp=updateAgentDto.LoginIp
    agent.LogoPermission=updateAgentDto.LogoPermission
    const updateagent =this.agentrepository.save(agent)
    return updateagent;
  }

  remove(id: number) {
    const deleteagent = this.agentrepository.delete(id)
    return `the userID ${id} is deleted succesfully`;
  }
}
