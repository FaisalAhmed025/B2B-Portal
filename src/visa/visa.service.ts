import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVisaDto } from './dto/create-visa.dto';
import { UpdateVisaDto } from './dto/update-visa.dto';
import { Visa } from './entities/visa.entity';

@Injectable()
export class VisaService {
  constructor(@InjectRepository(Visa)
  private visaRepo:Repository<Visa>){}

  create(createVisaDto: CreateVisaDto) {
    const visa = this.visaRepo.create(createVisaDto)
    return this.visaRepo.save(visa);
  }

  findAll() {
    return this.visaRepo.find({});
  }

  findOne(Id: number) {
    return this.visaRepo.findOneBy({Id});
  }

  update(id: number, updateVisaDto: UpdateVisaDto) {
    return `This action updates a #${id} visa`;
  }

  remove(Id: number) {
    return this.visaRepo.delete(Id);
  }
}
