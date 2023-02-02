import { Users } from './../../users/entities/user.entity';

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super()
    // super({
    //     Email: 'Email',
    //     Password: 'Password',
    //   });
  }

  async validate(Email: string, Password: string): Promise<any> {
    const user = await this.authService.validateuser(Email, Password);
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    return user;
  }
}
