import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Monitor } from './monitor/entities/monitor.entity';
import { MonitorModule } from './monitor/monitor.module';
import { MonitorSubject } from './monitor_subject/entities/monitor_subject.entity';
import { ProfessorSubject } from './monitor_subject/entities/professor_subject.entity';
import { MonitorSubjectModule } from './monitor_subject/monitor_subject.module';
import { Monitoring } from './monitoring/entities/monitoring.entity';
import { MonitoringModule } from './monitoring/monitoring.module';
import { Professor } from './professor/entities/professor.entity';
import { ProfessorModule } from './professor/professor.module';
import { Student } from './students/entities/student.entity';
import { StudentsModule } from './students/students.module';
import { Subject } from './subject/entities/subject.entity';
import { SubjectModule } from './subject/subject.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQLHOST,
      port: parseInt(process.env.MYSQLPORT),
      username: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
      entities: [
        Student,
        Monitor,
        Professor,
        Monitoring,
        Subject,
        ProfessorSubject,
        MonitorSubject,
      ],
    }),
    StudentsModule,
    MonitorModule,
    ProfessorModule,
    MonitoringModule,
    SubjectModule,
    AuthModule,
    MonitorSubjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
