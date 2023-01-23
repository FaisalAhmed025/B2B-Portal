import { PartialType } from '@nestjs/swagger';
import { CreateControlDto } from './create-control.dto';

export class UpdateControlDto extends PartialType(CreateControlDto) {}
