import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationService {
  constructor(@InjectRepository(Notification)
  private NotificationRepo:Repository<Notification>){}

  create(createNotificationDto: CreateNotificationDto) {
    const pushnotification = this.NotificationRepo.create(createNotificationDto)
    return  this.NotificationRepo.save(pushnotification);
  }

  findAll() {
    return this.NotificationRepo.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
