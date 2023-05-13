import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Monitor } from './monitor/entities/monitor.entity';
import { MonitorModule } from './monitor/monitor.module';
import { Monitoring } from './monitoring/entities/monitoring.entity';
import { MonitoringModule } from './monitoring/monitoring.module';
import { Professor } from './professor/entities/professor.entity';
import { ProfessorModule } from './professor/professor.module';
import { Student } from './students/entities/student.entity';
import { StudentsModule } from './students/students.module';

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
      entities: [Student, Monitor, Professor, Monitoring],
    }),
    StudentsModule,
    MonitorModule,
    ProfessorModule,
    MonitoringModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
