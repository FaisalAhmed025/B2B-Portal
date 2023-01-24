import { PartialType } from '@nestjs/swagger';
import { CreateReissueDto } from './create-reissue.dto';

export class UpdateReissueDto extends PartialType(CreateReissueDto) {}
