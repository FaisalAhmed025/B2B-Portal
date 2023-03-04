import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAllairlineDto } from './dto/create-allairline.dto';
import { UpdateAllairlineDto } from './dto/update-allairline.dto';
import { Allairlines } from './entities/allairline.entity';

@Injectable()
export class AllairlinesService {
  constructor(@InjectRepository(Allairlines) private allairlinesRepo:Repository<Allairlines>){}
 async create(createAllairlineDto: CreateAllairlineDto) {
    const allairline= await this.allairlinesRepo.create(createAllairlineDto)
    return this.allairlinesRepo.save(allairline);
  }

 async findAll() {
    return  await this.allairlinesRepo.find();
  }

 async findOne(Id: number) {
    return await this.allairlinesRepo.findOneBy({Id});
  }

 async update(Id: number, updateAllairlineDto: UpdateAllairlineDto) {
    const allairlines= await this.findOne(Id)
    allairlines.Code= updateAllairlineDto.Code
    allairlines.Comission=updateAllairlineDto.Comission
    allairlines.Name= updateAllairlineDto.Name

    const updateAllairline= await this.allairlinesRepo.save(allairlines)
    return updateAllairline
   
  }

  remove(Id: number) {
    return this.allairlinesRepo.delete(Id);
  }
}
