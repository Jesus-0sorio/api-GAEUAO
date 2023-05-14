import { PartialType } from '@nestjs/swagger';
import { CreateMonitorDto } from './create-monitor.dto';
import { IsEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMonitorDto extends PartialType(CreateMonitorDto) {
  @IsEmpty()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()
  @IsString()
  code?: number;
}
