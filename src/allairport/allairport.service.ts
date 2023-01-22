import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAllairportDto } from './dto/create-allairport.dto';
import { UpdateAllairportDto } from './dto/update-allairport.dto';
import { Allairport } from './entities/allairport.entity';

@Injectable()
export class AllairportService {
  constructor(@InjectRepository(Allairport)
  private allairportRepo:Repository<Allairport>){}

  create(createAllairportDto: CreateAllairportDto) {
    const createAllairport= this.allairportRepo.create(createAllairportDto)
    return this.allairportRepo.save(createAllairport);
  }

  findAll() {
    return this.allairportRepo.find() ;
  }

  findOne(Id: number) {
    return this.allairportRepo.findOneBy({Id});
  }

 async update(Id: number, updateAllairportDto: UpdateAllairportDto) {
    const allairport = await this.findOne(Id)

    allairport.Code= updateAllairportDto.Code
    allairport.Country= updateAllairportDto.Country
    allairport.Name=updateAllairportDto.Name
    allairport.city=updateAllairportDto.city

    const updateairport = await this.allairportRepo.save(allairport)
    return updateairport;
  }

  remove(Id: number) {
    return this.allairportRepo.delete(Id);
  }
}
