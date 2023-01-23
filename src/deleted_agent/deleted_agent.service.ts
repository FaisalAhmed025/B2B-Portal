import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeletedAgentDto } from './dto/create-deleted_agent.dto';
import { UpdateDeletedAgentDto } from './dto/update-deleted_agent.dto';
import { DeletedAgent } from './entities/deleted_agent.entity';

@Injectable()
export class DeletedAgentService {

  constructor(@InjectRepository(DeletedAgent)
  private deletedAgentRepo:Repository<DeletedAgent>){}

  create(createDeletedAgentDto: CreateDeletedAgentDto) {
    return 'This action adds a new deletedAgent';
  }

  findAll() {
    return this.deletedAgentRepo.find({});
  }

  findOne(Id: number) {
    return this.deletedAgentRepo.findOneBy({Id});
  }

  update(id: number, updateDeletedAgentDto: UpdateDeletedAgentDto) {
    return `This action updates a #${id} deletedAgent`;
  }

  remove(Id: number) {
    return this.deletedAgentRepo.delete(Id);
  }
}
