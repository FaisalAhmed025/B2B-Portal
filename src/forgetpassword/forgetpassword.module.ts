import { Module } from '@nestjs/common';
import { ForgetpasswordService } from './forgetpassword.service';
import { ForgetpasswordController } from './forgetpassword.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Forgetpassword } from './entities/forgetpassword.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Forgetpassword])],
  controllers: [ForgetpasswordController],
  providers: [ForgetpasswordService]
})
export class ForgetpasswordModule {}
