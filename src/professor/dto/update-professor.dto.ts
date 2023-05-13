import { PartialType } from '@nestjs/swagger';
import { CreateProfessorDto } from './create-professor.dto';
import { IsEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProfessorDto extends PartialType(CreateProfessorDto) {
  @IsEmpty()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()
  @IsString()
  degree?: string;
  @IsOptional()
  @IsString()
  code?: number;
}
