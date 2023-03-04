import { PartialType } from '@nestjs/swagger';
import { CreateForgetpasswordDto } from './create-forgetpassword.dto';

export class UpdateForgetpasswordDto extends PartialType(CreateForgetpasswordDto) {}
