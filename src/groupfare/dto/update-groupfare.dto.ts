import { PartialType } from '@nestjs/swagger';
import { CreateGroupfareDto } from './create-groupfare.dto';

export class UpdateGroupfareDto extends PartialType(CreateGroupfareDto) {}
