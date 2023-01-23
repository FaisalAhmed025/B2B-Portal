import { PartialType } from '@nestjs/swagger';
import { CreateDepositrequestDto } from './create-depositrequest.dto';

export class UpdateDepositrequestDto extends PartialType(CreateDepositrequestDto) {}
