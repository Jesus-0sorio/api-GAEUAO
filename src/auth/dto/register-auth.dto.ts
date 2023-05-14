import { IsEmpty, IsNumber, IsString } from 'class-validator';
import { LoginAuthDto } from './login-auth.dto';

export class RegisterAuthDto extends LoginAuthDto {
  @IsEmpty()
  @IsString()
  name: string;
  @IsEmpty()
  @IsString()
  career: string;
  @IsEmpty()
  @IsNumber()
  code: number;
  @IsEmpty()
  @IsString()
  email: string;
  @IsEmpty()
  @IsString()
  password: string;
}
