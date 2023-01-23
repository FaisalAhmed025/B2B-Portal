import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {

  constructor(@InjectRepository(Chat)
  private ChatRepo:Repository<Chat>
    
  ){}
  create(createChatDto: CreateChatDto) {
    const createChat = this.ChatRepo.create(createChatDto)
    return this.ChatRepo.save(createChat);
  }

  findAll() {
    return this.ChatRepo.find();
  }

  findOne(Id: number) {
    return this.ChatRepo.findOneBy({Id});
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(Id: number) {
    return this.ChatRepo.delete({Id});
  }
}
