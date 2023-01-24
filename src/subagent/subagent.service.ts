import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubagentDto } from './dto/create-subagent.dto';
import { UpdateSubagentDto } from './dto/update-subagent.dto';
import { Subagent } from './entities/subagent.entity';

@Injectable()
export class SubagentService {
  constructor(@InjectRepository(Subagent)
  private SubAgentRepo:Repository<Subagent>){}


  create(createSubagentDto: CreateSubagentDto) {
    const subagent = this.SubAgentRepo.create(createSubagentDto)
    return this.SubAgentRepo.save(subagent) ;
  }

  findAll() {
    return this.SubAgentRepo.find({});
  }

  findOne(Id: number) {
    return this.SubAgentRepo.findOneBy({Id})
  }

  async update(Id: number, updateSubagentDto: UpdateSubagentDto) {
    const subagent = await this.findOne(Id)

    subagent.Address =updateSubagentDto.Address
    subagent.Comission= updateSubagentDto.Comission
    subagent.Email=updateSubagentDto.Email
    subagent.Image= updateSubagentDto.Image
    subagent.Name=updateSubagentDto.Name
    subagent.Password=updateSubagentDto.Password
    subagent.Phone= updateSubagentDto.Phone
    subagent.SubAgentId = updateSubagentDto.SubAgentId
    const updatedSubAgent = await this.SubAgentRepo.save(subagent)
    return updatedSubAgent ;
  }

  remove(Id: number) {
    return this.SubAgentRepo.delete(Id);
  }
}
