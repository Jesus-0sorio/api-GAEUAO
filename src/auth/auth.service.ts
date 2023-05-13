import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { compareHash, generateHash } from './entities/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/students/entities/student.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Student)
    private studenteRepository: Repository<Student>,
  ) {}

  // async login(loginAuthDto: CreateAuthDto) {
  //   const { email, password } = loginAuthDto;
  //   const userExist = await this.userModel.findOne({ email });
  //   const isCheck = await compareHash(password, userExist.password);
  //   if (!userExist || !isCheck) {
  //     throw new HttpException(
  //       'Email or password is incorrect',
  //       HttpStatus.UNAUTHORIZED,
  //     );
  //   }
  //   const payload = { email, userId: userExist._id };

  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  // async register(registerAuthDto: UpdateAuthDto) {
  //   const { email, password } = registerAuthDto;
  //   const userExist = await this.userModel.findOne({ email });
  //   if (userExist) {
  //     throw new HttpException('User already exist', HttpStatus.CONFLICT);
  //   }
  //   const passHash = await generateHash(password);
  //   registerAuthDto.password = passHash;
  //   this.userModel.create(registerAuthDto);
  //   return {
  //     message: 'User created successfully',
  //   };
}
