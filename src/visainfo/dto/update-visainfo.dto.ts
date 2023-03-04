import { PartialType } from '@nestjs/swagger';
import { CreateVisainfoDto } from './create-visainfo.dto';

export class UpdateVisainfoDto extends PartialType(CreateVisainfoDto) {}
