import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';


@Injectable()
export class AuthService {
    constructor(private userService:UsersService, private jwtService: JwtService){}

    async validateuser(Email:string, Password:string): Promise<any>{
        const user = await this.userService.findOne(+Email)
        console.log(await bcrypt.hash(Password, 10));
        if (user && bcrypt.compare(user.Password, await bcrypt.hash(Password, 10))) {
            const { Password, ...result } = user;
            return result;
          }
    }

    async login(user: any) {
        console.log(user.user);
        const payload = { 
            user : {
                Id: user.user.Id, 
                Email: user.user.Email, 
                Name: user.user.Name, 
            }
        };
        // console.log({payload});
        return {
          access_token: this.jwtService.sign(payload),
        };
    
      }
    
        
      async register(data: CreateUserDto) {
        data.Password = await bcrypt.hash(data.Password, 10)
        let response = await this.userService.create(data);
        if (response) {
            const { Password, ...result } = response;
            return result;
        }
    }

  decodeToken(token: string) : any {
    return this.jwtService.decode(token)
  }
}
