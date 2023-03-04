import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStafflistDto } from './dto/create-stafflist.dto';
import { UpdateStafflistDto } from './dto/update-stafflist.dto';
import { Stafflist } from './entities/stafflist.entity';

@Injectable()
export class StafflistService {
  constructor(@InjectRepository(Stafflist)
  private StafflistRepo:Repository<Stafflist>){}
  create(createStafflistDto: CreateStafflistDto) {
    const createstaff = this.StafflistRepo.create(createStafflistDto)
    return this.StafflistRepo.save(createstaff);
  }

  findAll() {
    return this.StafflistRepo.find({});
  }

  findOne(Id: number) {
    return this.StafflistRepo.findOneBy({Id});
  }

  async update(Id: number, updateStafflistDto: UpdateStafflistDto) {
    const staff =  await this.findOne(Id)
    staff.Email = updateStafflistDto.Email
    staff.Designation =updateStafflistDto.Email
    staff.AgentId=updateStafflistDto.AgentId
    staff.Created =updateStafflistDto.Created
    staff.Name= updateStafflistDto.Name
    staff.Password= updateStafflistDto.Password
    staff.Phone = updateStafflistDto.Phone
    staff.Role= updateStafflistDto.Role
    staff.Status=updateStafflistDto.Status

    const updatedStaff = await this.StafflistRepo.save(staff)
    return updatedStaff;
  }

  remove(Id: number) {
    return this.StafflistRepo.delete(Id);
  }
}
