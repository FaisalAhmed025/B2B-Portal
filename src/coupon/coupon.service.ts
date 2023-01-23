import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { Coupon } from './entities/coupon.entity';

@Injectable()
export class CouponService {

  constructor(@InjectRepository(Coupon)
  private CouponRepo:Repository<Coupon>){}


  create(createCouponDto: CreateCouponDto) {

    const creatCoupon = this.CouponRepo.create(createCouponDto)
    return this.CouponRepo.save(creatCoupon) ;
  }

  findAll() {
    return this.CouponRepo.find({});
  }

  findOne(Id: number) {
    return this.CouponRepo.findOneBy({Id});
  }

 async update(Id: number, updateCouponDto: UpdateCouponDto) {
  const updateCoupon = await this.findOne(Id)

  updateCoupon.ApplyBy=updateCouponDto.ApplyBy
  updateCoupon.Coupon=updateCouponDto.Coupon
  updateCoupon.CreatedAt=updateCouponDto.CreatedAt
  updateCoupon.Status=updateCouponDto.Status
  updateCoupon.UseLimit=updateCouponDto.UseLimit

  const updatedCoupon = await this.CouponRepo.save(updateCoupon)
  return updatedCoupon;
    
  }

  remove(Id: number) {
    return this.CouponRepo.delete(Id);
  }
}
