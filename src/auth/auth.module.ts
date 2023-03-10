import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist';
import { UsersModule } from 'src/users/users.module';
// import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './Guard/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports:[ UsersModule, PassportModule,JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '24h' },
  })
   ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  // controllers:[AuthController],
  exports:[AuthService],
})
export class AuthModule {}
