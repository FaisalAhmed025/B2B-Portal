import { PartialType } from '@nestjs/swagger';
import { CreateAgentFailedDto } from './create-agent_failed.dto';

export class UpdateAgentFailedDto extends PartialType(CreateAgentFailedDto) {}
