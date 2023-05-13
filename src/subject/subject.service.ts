import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { BaseController } from 'src/commons/controller.commons';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectService extends BaseService<Subject> {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {
    super();
  }
  getRepository(): Repository<Subject> {
    return this.subjectRepository;
  }
  // create(createSubjectDto: CreateSubjectDto) {
  //   return 'This action adds a new subject';
  // }

  // findAll() {
  //   return `This action returns all subject`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} subject`;
  // }

  // update(id: number, updateSubjectDto: UpdateSubjectDto) {
  //   return `This action updates a #${id} subject`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} subject`;
  // }
}
