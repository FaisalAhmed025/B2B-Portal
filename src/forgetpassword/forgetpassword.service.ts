import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateForgetpasswordDto } from './dto/create-forgetpassword.dto';
import { UpdateForgetpasswordDto } from './dto/update-forgetpassword.dto';
import { Forgetpassword } from './entities/forgetpassword.entity';

@Injectable()
export class ForgetpasswordService {
  constructor(@InjectRepository(Forgetpassword)
  private forgetPassRepo:Repository<Forgetpassword>){}

  create(createForgetpasswordDto: CreateForgetpasswordDto) {
    return 'This action adds a new forgetpassword';
  }

  findAll() {
    return this.forgetPassRepo.find();
  }

  findOne(Id: number) {
    return this.forgetPassRepo.findOneBy({Id});
  }

  update(id: number, updateForgetpasswordDto: UpdateForgetpasswordDto) {
    return `This action updates a #${id} forgetpassword`;
  }

  remove(Id: number) {
    return this.forgetPassRepo.delete(Id);
  }
}
