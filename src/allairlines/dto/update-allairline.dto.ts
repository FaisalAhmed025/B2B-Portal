import { PartialType } from '@nestjs/swagger';
import { CreateAllairlineDto } from './create-allairline.dto';

export class UpdateAllairlineDto extends PartialType(CreateAllairlineDto) {}
