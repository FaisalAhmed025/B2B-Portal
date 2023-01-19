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

  findOne(id: number) {
    return this.AirlineRepo.findOneBy({id});
  }

  async update(id: number, updateAirlineDto: UpdateAirlineDto) {
    const airline = await this.findOne(id);


    airline.name = updateAirlineDto.name
    airline.nameBangla =updateAirlineDto.name
    airline.code = updateAirlineDto.code
    airline.commission =updateAirlineDto.commission

    const updateairline = await this.AirlineRepo.save(airline)
    return updateairline;
  }

  remove(id: number) {
    return this.AirlineRepo.delete({id});
  }
}
