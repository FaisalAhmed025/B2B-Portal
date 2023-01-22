import { PartialType } from '@nestjs/swagger';
import { CreateAllairportDto } from './create-allairport.dto';

export class UpdateAllairportDto extends PartialType(CreateAllairportDto) {}
