import { PartialType } from '@nestjs/swagger';
import { CreateAirticketDto } from './create-airticket.dto';

export class UpdateAirticketDto extends PartialType(CreateAirticketDto) {}
