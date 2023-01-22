import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAllpackageDto } from './dto/create-allpackage.dto';
import { UpdateAllpackageDto } from './dto/update-allpackage.dto';
import { Allpackages } from './entities/allpackage.entity';

@Injectable()
export class AllpackagesService {

  constructor(@InjectRepository(Allpackages)
  private allpackageRepo:Repository<Allpackages>){}

  create(createAllpackageDto: CreateAllpackageDto) {
    const allpackages = this.allpackageRepo.create(createAllpackageDto)
    return this.allpackageRepo.save(allpackages) ;
  }

  findAll() {
    return this.allpackageRepo.find({});
  }

  findOne(Id: number) {
    return this.allpackageRepo.findOneBy({Id});
  }

 async update(Id: number, updateAllpackageDto: UpdateAllpackageDto) {
  const packages = await this.findOne(Id)

  packages.PkId= updateAllpackageDto.PkId
  packages.LongTitleEN= updateAllpackageDto. LongTitleEN
  packages.TitleBN = updateAllpackageDto.TitleBN
  packages.Album = updateAllpackageDto.Album
  packages.CoverImage = updateAllpackageDto.CoverImage
  packages.LocationBN = updateAllpackageDto.LocationBN
  packages.LocationEn = updateAllpackageDto.LocationEn
  packages.ShortDescriptionBN = updateAllpackageDto. ShortDescriptionBN
  packages.ShortDescriptionEN = updateAllpackageDto. ShortDescriptionEN
  packages.StartDateBN = updateAllpackageDto. StartDateBN
  packages.StartDateEN = updateAllpackageDto. StartDateEN
  packages.EndDateBN = updateAllpackageDto. EndDateBN
  packages.EndDateEN = updateAllpackageDto.EndDateEN
  packages.DurationBN = updateAllpackageDto.DurationBN
  packages.DurationEn = updateAllpackageDto.DurationEn
  packages.Price = updateAllpackageDto.Price
  packages.TripTheme = updateAllpackageDto.TripTheme
  packages.TripType = updateAllpackageDto.TripType
  packages.TripPlan = updateAllpackageDto. TripPlan
  packages.ScheduleDetailsBN = updateAllpackageDto.ScheduleDetailsBN
  packages.ScheduleDetailsEN = updateAllpackageDto.ScheduleDetailsEN
  packages.InclusionBN = updateAllpackageDto.InclusionBN
  packages.InclusionEN = updateAllpackageDto.InclusionEN
  packages.ExclusionBN = updateAllpackageDto.ExclusionBN
  packages.PlaceVisitBN=updateAllpackageDto.PlaceVisitBN
  packages.PlaceVisitEN=updateAllpackageDto.PlaceVisitEN
  packages.DetailsBN=updateAllpackageDto.DetailsBN
  packages.DetailsEN =updateAllpackageDto.DetailsEN
  packages.BookingPolicyBN=updateAllpackageDto.BookingPolicyBN
  packages.BookingPolicyEN=updateAllpackageDto.BookingPolicyEN
  packages.RefundPolicyBN=updateAllpackageDto.BookingPolicyBN
  packages.RefundPolicyEN=updateAllpackageDto.RefundPolicyEN
  packages.TermsBN=updateAllpackageDto.TermsBN
  packages.TermsEn= updateAllpackageDto.TermsEn
  const updatepackages = await this.allpackageRepo.save(packages)
  return updatepackages;


  return;
  }

  remove(Id: number) {
    return this.allpackageRepo.delete({Id});
  }
}
