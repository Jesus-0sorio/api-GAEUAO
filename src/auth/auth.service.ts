import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Repository } from 'typeorm';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { compareHash, generateHash } from './utils/handleBcripts';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async login(loginAuthDto: LoginAuthDto) {
    const { email, password } = loginAuthDto;
    const userExist = await this.studentRepository
      .createQueryBuilder('student')
      .where('student.email = :email', { email })
      .addSelect('student.password')
      .getOne();
    const isCheck = await compareHash(password, userExist.password);
    if (!userExist || !isCheck) {
      throw new HttpException(
        'Email or password is incorrect',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const payload = { email, userId: userExist.id };

    return {
      id: userExist.id,
      code: userExist.code,
      name: userExist.name,
      email: userExist.email,
      career: userExist.career,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerAuthDto: RegisterAuthDto) {
    const { email, password } = registerAuthDto;
    const userExist = await this.studentRepository.findOne({
      where: { email },
    });
    if (userExist) {
      throw new HttpException('User already exist', HttpStatus.CONFLICT);
    }
    const passHash = await generateHash(password);
    registerAuthDto.password = passHash;
    this.studentRepository.save(registerAuthDto);
    return {
      message: 'User created successfully',
    };
  }
}
