import { PartialType } from '@nestjs/swagger';
import { CreateTicketedDto } from './create-ticketed.dto';

export class UpdateTicketedDto extends PartialType(CreateTicketedDto) {}
