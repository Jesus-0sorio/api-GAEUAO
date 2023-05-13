import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
}
