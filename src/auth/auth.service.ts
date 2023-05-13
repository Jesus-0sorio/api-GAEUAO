import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { compareHash, generateHash } from './utils/handleBcripts';

@Injectable()
export class AuthService {
  userRepository: any;
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Student) private readonly userModel: Repository<Student>,
  ) {}

  async login(loginAuthDto: LoginAuthDto) {
    const { email, password } = loginAuthDto;
    const userExist = await this.userRepository.findOne({ where: { email } });
    const isCheck = await compareHash(password, userExist.password);
    if (!userExist || !isCheck) {
      throw new HttpException(
        'Email or password is incorrect',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const payload = { email, userId: userExist._id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerAuthDto: RegisterAuthDto) {
    const { email, password } = registerAuthDto;
    const userExist = await this.userRepository.findOne({ where: { email } });
    if (userExist) {
      throw new HttpException('User already exist', HttpStatus.CONFLICT);
    }
    const passHash = await generateHash(password);
    registerAuthDto.password = passHash;
    this.userModel.save(registerAuthDto);
    return {
      message: 'User created successfully',
    };
  }
}
