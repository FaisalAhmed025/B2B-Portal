import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './Guard/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body);
    return req.user;
  }

  @Post('register')
  async register(@Request() req, authreg: CreateUserDto) {
    return this.authService.register(authreg);
  }
}
