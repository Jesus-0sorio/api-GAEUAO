import { IsDate, IsEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMonitoringDto {
  @IsEmpty()
  @IsDate()
  monitor_date: Date;
  @IsEmpty()
  @IsString()
  classroom: string;
  @IsEmpty()
  @IsString()
  monitoring_status: string;
  @IsString()
  comment: string;
  @IsNumber()
  student_code: number;
  @IsNumber()
  professor_code: number;
  @IsNumber()
  monitor_code: number;
}
