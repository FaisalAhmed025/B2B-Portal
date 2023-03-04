import { PartialType } from '@nestjs/swagger';
import { CreateBookingotherDto } from './create-bookingother.dto';

export class UpdateBookingotherDto extends PartialType(CreateBookingotherDto) {}
