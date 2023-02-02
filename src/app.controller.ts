import { JwtAuthGuard } from './auth/Guard/jwt-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authservice: AuthService,
  ) {}

  // @Post('auth/login')
  // async login(@Request() req) {
  //   console.log();
    
  //   return this.authservice.login(req.body);
  // }
  // @UseGuards(JwtAuthGuard)
  @Get('Homepage')
  getHello(): string {
    return this.appService.getHello();
  }
}
