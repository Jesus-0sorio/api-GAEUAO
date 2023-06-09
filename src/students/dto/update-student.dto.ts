import { PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';
import { IsEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsEmpty()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()
  @IsString()
  career?: string;
}
