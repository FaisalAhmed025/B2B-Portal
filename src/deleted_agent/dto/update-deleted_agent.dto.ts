import { PartialType } from '@nestjs/swagger';
import { CreateDeletedAgentDto } from './create-deleted_agent.dto';

export class UpdateDeletedAgentDto extends PartialType(CreateDeletedAgentDto) {}
