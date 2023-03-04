import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Users)
  private UsersRepo:Repository<Users>){}

  create(createUserDto: CreateUserDto) {
    const user = this.UsersRepo.create(createUserDto)
    return this.UsersRepo.save(user);
  }

  findAll() {
    return this.UsersRepo.find({});
  }

  async getUserByEmail(Email:string):Promise<Users>{
    return this.UsersRepo.findOne({
      where:{Email}
    })
  }

  findOne(Id: number) {
    return this.UsersRepo.findOneBy({Id});
  }

  // async findOneByEmail(Email:string):Promise<Users>{
  //   return this.UsersRepo.findOne({
  //     where:{
  //       Email:Email
  //     }
  //   })
  // }

  async update(Id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(Id)
    user.EMP_Id = updateUserDto.EMP_Id
    user.UserName = updateUserDto.UserName
    user.Fname = updateUserDto.Fname
    user.Lname = updateUserDto.Lname
    user.Email = updateUserDto.Email
    user.Role= updateUserDto.Role
    user.Password = updateUserDto.Password
    user.Img = updateUserDto.Img
    user.Status = updateUserDto.Status
    const updateuser = await this.UsersRepo.save(user)
    return updateuser;
  }

  remove(Id: number) {
    return this.UsersRepo.delete(Id);
  }
}
