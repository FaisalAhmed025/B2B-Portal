import { PartialType } from '@nestjs/swagger';
import { CreateAllpackageDto } from './create-allpackage.dto';

export class UpdateAllpackageDto extends PartialType(CreateAllpackageDto) {}
