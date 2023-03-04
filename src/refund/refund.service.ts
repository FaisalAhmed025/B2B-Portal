import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRefundDto } from './dto/create-refund.dto';
import { UpdateRefundDto } from './dto/update-refund.dto';
import { Refund } from './entities/refund.entity';

@Injectable()
export class RefundService {
  constructor(@InjectRepository(Refund)
  private RefundRepo:Repository<Refund>){}


  create(createRefundDto: CreateRefundDto) {
    const CreateRefund = this.RefundRepo.create(createRefundDto)
    return this.RefundRepo.save(CreateRefund);
  }

  findAll() {
    return this.RefundRepo.find({});
  }

  findOne(Id: number) {
    return this.RefundRepo.findOneBy({Id});
  }

  update(id: number, updateRefundDto: UpdateRefundDto) {
    return `This action updates a #${id} refund`;
  }

  remove(Id: number) {
    return this.RefundRepo.delete(Id)
  }
}
