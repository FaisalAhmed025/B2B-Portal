import { HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgentFailedDto } from './dto/create-agent_failed.dto';
import { UpdateAgentFailedDto } from './dto/update-agent_failed.dto';
import { AgentFailed } from './entities/agent_failed.entity';

@Injectable()
export class AgentFailedService {
  constructor(@InjectRepository(AgentFailed) private agentfailedRepo:Repository<AgentFailed>){}
  
  async create(createAgentFailedDto: CreateAgentFailedDto) {
    const newagent = await this.agentfailedRepo.create(createAgentFailedDto)
    const agentFailed = this.agentfailedRepo.save(newagent);
    return agentFailed;
  }

  
  async findAll() {
  const agentFailed= await this.agentfailedRepo.find({});
  return agentFailed;
  }

  async findOne(Id: number) {
    const agentFailed= await this.agentfailedRepo.findOneBy({Id});
    if(!agentFailed){
      throw new HttpException(`User ${Id} does not Exists`, HttpStatus.NOT_FOUND)
    }
    else
    return agentFailed;
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

 async remove(Id: number) {
    const agentFailed= await this.agentfailedRepo.delete({Id});
    return agentFailed;
  }
}
