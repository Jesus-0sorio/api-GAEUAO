import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonitorSubjectController } from './monitor_subject.controller';
import { MonitorSubjectService } from './monitor_subject.service';
import { ProfessorSubject } from './entities/professor_subject.entity';
import { MonitorSubject } from './entities/monitor_subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfessorSubject, MonitorSubject])],
  controllers: [MonitorSubjectController],
  providers: [MonitorSubjectService],
})
export class MonitorSubjectModule {}
