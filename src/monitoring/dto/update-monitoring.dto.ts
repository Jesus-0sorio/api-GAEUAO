import { IsEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMonitoringDto {
  @IsEmpty()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsString()
  monitoring_status?: string;
  @IsOptional()
  @IsString()
  comment?: string;
  @IsOptional()
  @IsNumber()
  student_code?: number;
}
