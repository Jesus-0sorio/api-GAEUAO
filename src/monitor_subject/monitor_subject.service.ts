import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MonitorSubject } from './entities/monitor_subject.entity';
import { ProfessorSubject } from './entities/professor_subject.entity';

@Injectable()
export class MonitorSubjectService {
  constructor(
    @InjectRepository(ProfessorSubject)
    private professorSubjectRepository: Repository<ProfessorSubject>,
    @InjectRepository(MonitorSubject)
    private monitorSubjectRepository: Repository<MonitorSubject>,
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

  async findAllBySubjectId(id: number) {
    //console.log(this.professorSubjectRepository.find());
    const data = await this.professorSubjectRepository
      .createQueryBuilder('professor_subject')
      .leftJoinAndSelect('professor_subject.subject_id', 'subject')
      .leftJoinAndSelect('professor_subject.professor_id', 'professor')
      .where('professor_subject.subject_id = :id', { id: id })
      .getMany();
    const result = await this.monitorSubjectRepository
      .createQueryBuilder('monitor_subject')
      .leftJoinAndSelect('monitor_subject.monitor_id', 'monitor')
      .leftJoinAndSelect('monitor_subject.subject_id', 'subject')
      .where('monitor_subject.subject_id = :id', { id: id })
      .getMany();
    return { ...data, ...result };
  }

  // update(id: number, updateMonitorSubjectDto: UpdateMonitorSubjectDto) {
  //   return `This action updates a #${id} monitorSubject`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} monitorSubject`;
  // }
}
