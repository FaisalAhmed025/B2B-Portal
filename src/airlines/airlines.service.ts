import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAirlineDto } from './dto/create-airline.dto';
import { UpdateAirlineDto } from './dto/update-airline.dto';
import { Airlines } from './entities/airline.entity';

@Injectable()
export class AirlinesService {
  constructor(@InjectRepository(Airlines) private AirlineRepo:Repository<Airlines>){}
  
  create(createAirlineDto: CreateAirlineDto) {
    const airline= this.AirlineRepo.create(createAirlineDto);
    return this.AirlineRepo.save(airline)
  }

  findAll() {
    return this.AirlineRepo.find({});
  }

  findOne(Id: number) {
    return this.AirlineRepo.findOneBy({Id});
  }

  async update(id: number, updateAirlineDto: UpdateAirlineDto) {
    const airline = await this.findOne(id);


    airline.Name = updateAirlineDto.Name
    airline.NameBangla =updateAirlineDto.Name
    airline.Code = updateAirlineDto.Code
    airline.Commission =updateAirlineDto.Commission

    const updateairline = await this.AirlineRepo.save(airline)
    return updateairline;
  }

  remove(Id: number) {
    return this.AirlineRepo.delete({Id});
  }
}
