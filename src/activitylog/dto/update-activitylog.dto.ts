import { PartialType } from '@nestjs/swagger';
import { CreateActivitylogDto } from './create-activitylog.dto';

export class UpdateActivitylogDto extends PartialType(CreateActivitylogDto) {}
