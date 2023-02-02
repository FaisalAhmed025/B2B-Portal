import { Users } from './../users/entities/user.entity';
import { AgentService } from './../agent/agent.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private userrepo: Repository<Users>,
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateuser(Email: string, Password: string): Promise<any> {
    const user = await this.userService.getUserByEmail(Email);

    if (!user) {
      throw new BadRequestException();
    }
    console.log(await bcrypt.hash(Password, 10));
    if (
      user &&
      bcrypt.compare(user.Password, await bcrypt.hash(Password, 10))
    ) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any): Promise<any> {
    const payload = { 
      Email:user.Email,

      
    };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data: CreateUserDto) {
    data.Password = await bcrypt.hash(data.Password, 10)
    let response = await this.userrepo .create(data);
    return this.userrepo.save(response);
  }

  decodeToken(token: string): any {
    return this.jwtService.decode(token);
  }
}
