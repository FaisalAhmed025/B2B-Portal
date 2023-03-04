import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Jobs } from './entities/job.entity';

@Injectable()
export class JobsService {

  constructor(@InjectRepository(Jobs)
  private jobRepo:Repository<Jobs>) {}

  create(createJobDto: CreateJobDto) {
    const createjobpost= this.jobRepo.create(createJobDto)
    return this.jobRepo.save(createjobpost) ;
  }

  findAll() {
    return this.jobRepo.find();
  }

  findOne(Id: number) {
    return this.jobRepo.findOneBy({Id});
  }

  async update(Id: number, updateJobDto: UpdateJobDto) {
    const job = await this.findOne(Id)
    job.Text= updateJobDto.Text
    job.Status=updateJobDto.Status
    job.Message=updateJobDto.Message
    const updatedJob = await this.jobRepo.save(job)
    return updatedJob ;
  }

  remove(Id: number) {
    return this.jobRepo.delete(Id);
  }
}
