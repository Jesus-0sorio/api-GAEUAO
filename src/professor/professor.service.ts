import { Injectable } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { BaseService } from 'src/commons/service.commons';
import { Professor } from './entities/professor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProfessorService extends BaseService<Professor> {
  constructor(
    @InjectRepository(Professor)
    private professorRepository: Repository<Professor>,
  ) {
    super();
  }
  getRepository(): Repository<Professor> {
    return this.professorRepository;
  }
  // create(createProfessorDto: CreateProfessorDto) {
  //   return 'This action adds a new professor';
  // }

  // findAll() {
  //   return `This action returns all professor`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} professor`;
  // }

  // update(id: number, updateProfessorDto: UpdateProfessorDto) {
  //   return `This action updates a #${id} professor`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} professor`;
  // }
}
