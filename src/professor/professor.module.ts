import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorSubject } from 'src/monitor_subject/entities/professor_subject.entity';
import { Professor } from './entities/professor.entity';
import { ProfessorController } from './professor.controller';
import { ProfessorService } from './professor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Professor, ProfessorSubject])],
  controllers: [ProfessorController],
  providers: [ProfessorService],
})
export class ProfessorModule {}
