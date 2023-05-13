import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { BaseService } from 'src/commons/service.commons';

@Injectable()
export class StudentsService extends BaseService<Student> {
  constructor(
    @InjectRepository(Student)
    private studenteRepository: Repository<Student>,
  ) {
    super();
  }
  getRepository(): Repository<Student> {
    return this.studenteRepository;
  }

  // create(createStudentDto: CreateStudentDto) {
  //   const newStudent = this.stutdenteRepository.create(createStudentDto);
  //   return this.stutdenteRepository.save(newStudent);
  // }

  // findAll() {
  //   return `This action returns all students`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} student`;
  // }

  // update(id: number, updateStudentDto: UpdateStudentDto) {
  //   return `This action updates a #${id} student`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} student`;
  // }
}
