import { PartialType } from '@nestjs/swagger';
import { CreateSubagentDto } from './create-subagent.dto';

export class UpdateSubagentDto extends PartialType(CreateSubagentDto) {}
