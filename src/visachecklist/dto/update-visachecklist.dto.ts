import { PartialType } from '@nestjs/swagger';
import { CreateVisachecklistDto } from './create-visachecklist.dto';

export class UpdateVisachecklistDto extends PartialType(CreateVisachecklistDto) {}
