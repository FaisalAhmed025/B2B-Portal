import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { Airports } from './entities/airport.entity';

@Injectable()
export class AirportsService {
  constructor(@InjectRepository(Airports) private AirportRepository:Repository<Airports>){}
 
  create(createAirportDto: CreateAirportDto) {
    const airport =this.AirportRepository.create(createAirportDto)
    return this.AirportRepository.save(airport) ;
  }

  findAll() {
    const airports= this.AirportRepository.find()
    return airports;
  }

  findOne(Id: number) {
    return this.AirportRepository.findOneBy({Id});
  }

  async update(Id: number, updateAirportDto: UpdateAirportDto) {
    const airport = await this.findOne(Id)
    airport.CityName=updateAirportDto.CityName
    airport.Citycode=updateAirportDto.Citycode
    airport.Code=updateAirportDto.Code
    airport.CountryCode=updateAirportDto.CountryCode
    airport.CountryName=updateAirportDto.CountryName
    airport.Name=updateAirportDto.Name
    airport.Lat=updateAirportDto.Lat
    airport.Lon=updateAirportDto.Lon
    airport.NumOfAirport=updateAirportDto.NumOfAirport
    airport.TimeZone=updateAirportDto.TimeZone

    const updateAirport= await this.AirportRepository.save(airport)
    return updateAirport;
  }

  remove(Id: number) {
    return this.AirportRepository.delete({Id});
  }
}
