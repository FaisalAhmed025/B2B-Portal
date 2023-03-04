import { PartialType } from '@nestjs/swagger';
import { CreateVisaDto } from './create-visa.dto';

export class UpdateVisaDto extends PartialType(CreateVisaDto) {}
