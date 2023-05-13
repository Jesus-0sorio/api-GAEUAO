import { PartialType } from '@nestjs/swagger';
import { CreateAuthDto } from './create-auth.dto';
import { IsEmpty, IsString } from 'class-validator';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @IsEmpty()
  @IsString()
  name: string;
}
