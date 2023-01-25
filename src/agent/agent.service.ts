import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { Agent } from './entities/agent.entity';


@Injectable()
export class AgentService {
  constructor(@InjectRepository(Agent) private agentrepository:Repository <Agent>){}

  async create(createAgentDto: CreateAgentDto) {
    const newagent = await this.agentrepository.create(createAgentDto)
    const agent= this.agentrepository.save(newagent);
    return agent;
  }

  async findAll() {
    const agent= await this.agentrepository.find({});
    return agent;
  }

   async findOne(Id: number) {
    const agent = await this.agentrepository.findOneBy({Id})
    if(!agent){
      throw new HttpException(`User ${Id} does not Exists`, HttpStatus.NOT_FOUND)
    }
    else
    return agent;
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

  async remove(id: number) {
    const deleteagent = await this.agentrepository.delete(id)
    if(!deleteagent){
      throw new HttpException( {status:`User ${id} does not Exists`,}, HttpStatus.NOT_FOUND)
    }
    else
    return deleteagent;
  }
}
