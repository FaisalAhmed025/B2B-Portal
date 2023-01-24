import { PartialType } from '@nestjs/swagger';
import { CreateVoidDto } from './create-void.dto';

export class UpdateVoidDto extends PartialType(CreateVoidDto) {}
