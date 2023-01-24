import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Orders } from './entities/order.entity';


@Injectable()
export class OrdersService {

  constructor(@InjectRepository(Orders)
  private orderrepo:Repository<Orders>){}

  create(createOrderDto: CreateOrderDto) {
    const order = this.orderrepo.create(createOrderDto)
    return this.orderrepo.save(order) ;
  }

  findAll() {
    return this.orderrepo.find({});
  }

  findOne(Id: number) {
    return this.orderrepo.findOneBy({Id})
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(Id: number) {
    return this.orderrepo.delete(Id);
  }
}
