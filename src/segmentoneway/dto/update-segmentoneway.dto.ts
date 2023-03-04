import { PartialType } from '@nestjs/swagger';
import { CreateSegmentonewayDto } from './create-segmentoneway.dto';

export class UpdateSegmentonewayDto extends PartialType(CreateSegmentonewayDto) {}
