import { PartialType } from '@nestjs/swagger';
import { CreateLastloginDto } from './create-lastlogin.dto';

export class UpdateLastloginDto extends PartialType(CreateLastloginDto) {}
