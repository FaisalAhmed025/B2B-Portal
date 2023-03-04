import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupfareDto } from './dto/create-groupfare.dto';
import { UpdateGroupfareDto } from './dto/update-groupfare.dto';
import { Groupfare } from './entities/groupfare.entity';

@Injectable()
export class GroupfareService {

  constructor(@InjectRepository(Groupfare)
  private GroupFareRepo:Repository<Groupfare>) {}

  async create(createGroupfareDto: CreateGroupfareDto) {
    const creatfare = await this.GroupFareRepo.create(createGroupfareDto)
    const groupfare = this.GroupFareRepo.save(creatfare)
    return groupfare;
  }

 async findAll() {
    const AllgroupFare = await this.GroupFareRepo.find({})
    return AllgroupFare;
  }

  async findOne(Id: number) {
    const onegroupfare = await this.GroupFareRepo.findOneBy({Id})
    return onegroupfare;
  }

  async update(Id: number, updateGroupfareDto: UpdateGroupfareDto) {
    const groupfare = await this.findOne(Id)
    return ;
  }

  remove(id: number) {
    return `This action removes a #${id} groupfare`;
  }
}
