import { PartialType } from '@nestjs/swagger';
import { CreateMonitorSubjectDto } from './create-monitor_subject.dto';

export class UpdateMonitorSubjectDto extends PartialType(CreateMonitorSubjectDto) {}
