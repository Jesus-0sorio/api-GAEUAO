import { PartialType } from '@nestjs/swagger';
import { CreateSubjectDto } from './create-subject.dto';
import { IsEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {
  @IsEmpty()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsString()
  name?: string;
}
