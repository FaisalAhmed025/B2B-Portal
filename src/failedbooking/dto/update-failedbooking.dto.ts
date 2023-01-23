import { PartialType } from '@nestjs/swagger';
import { CreateFailedbookingDto } from './create-failedbooking.dto';

export class UpdateFailedbookingDto extends PartialType(CreateFailedbookingDto) {}
