import { PartialType } from '@nestjs/swagger';
import { CreateSegmentreturnwayDto } from './create-segmentreturnway.dto';

export class UpdateSegmentreturnwayDto extends PartialType(CreateSegmentreturnwayDto) {}
