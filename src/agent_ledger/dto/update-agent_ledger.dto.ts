import { PartialType } from '@nestjs/swagger';
import { createAgentLedgerDto} from './create-agent_ledger.dto';

export class UpdateAgentLedgerDto extends PartialType(createAgentLedgerDto) {}
