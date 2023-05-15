import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessorSubject } from './entities/professor_subject.entity';

@Injectable()
export class MonitorSubjectService {
  constructor(
    @InjectRepository(ProfessorSubject)
    private professorSubjectRepository: Repository<ProfessorSubject>,
  ) {}
  // create(createMonitorSubjectDto: CreateMonitorSubjectDto) {
  //   return 'This action adds a new monitorSubject';
  // }

  // findAll() {
  //   return `This action returns all monitorSubject`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} monitorSubject`;
  // }

  async findAllByProfessorId(id: number) {
    //console.log(this.professorSubjectRepository.find());
    return await this.professorSubjectRepository
      .createQueryBuilder('professor_subject')
      .leftJoinAndSelect('professor_subject.subject_id', 'subject')
      .leftJoinAndSelect('professor_subject.professor_id', 'professor')
      .where('professor_subject.professor_id = :id', { id: id })
      .getMany();
  }

  // update(id: number, updateMonitorSubjectDto: UpdateMonitorSubjectDto) {
  //   return `This action updates a #${id} monitorSubject`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} monitorSubject`;
  // }
}
