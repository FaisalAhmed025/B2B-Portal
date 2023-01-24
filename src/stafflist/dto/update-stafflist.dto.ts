import { PartialType } from '@nestjs/swagger';
import { CreateStafflistDto } from './create-stafflist.dto';

export class UpdateStafflistDto extends PartialType(CreateStafflistDto) {}
