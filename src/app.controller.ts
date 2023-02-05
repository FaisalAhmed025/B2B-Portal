import { JwtAuthGuard } from './auth/Guard/jwt-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authservice: AuthService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file',
  {
    storage:diskStorage({
      destination: './files',
      filename:(req, file, callback)=>{
        const uniqueSuffix = Date.now() + '-' +Math.round(Math.random()*1e9);
        const ext = extname(file.originalname)
        const filename = `${file.originalname}-${uniqueSuffix}${ext}`;
        callback(null, filename)
      }
    })
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log("uploaded file is :", file);
    
    return 'file uploaded  ';
  }

  @Post('auth/login')
  async login(@Request() req) {
    console.log();

    return this.authservice.login(req.body);
  }
  @UseGuards(JwtAuthGuard)
  @Get('Homepage')
  getHello(): string {
    return this.appService.getHello();
  }
}
