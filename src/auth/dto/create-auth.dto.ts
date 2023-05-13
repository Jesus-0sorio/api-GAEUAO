import { IsEmail, IsEmpty, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  @IsEmpty()
  email: string;
  @IsEmpty()
  @MinLength(4)
  password: string;
}
