import { Subject } from 'src/subject/entities/subject.entity';
import { Monitor } from 'src/monitor/entities/monitor.entity';
import { Professor } from 'src/professor/entities/professor.entity';
import { Student } from 'src/students/entities/student.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Monitoring {
  @Column({ primary: true, unique: true })
  id: number;
  @Column('date')
  monitor_date: Date;
  @Column('time')
  start_time: Date;
  @Column('time')
  end_time: Date;
  @Column('varchar', { length: 45 })
  classroom: string;
  @Column('varchar', { length: 45 })
  monitoring_status: string;
  @Column('varchar', { length: 45 })
  comment: string;
  @OneToOne(() => Subject)
  @JoinColumn({ name: 'subject_id' })
  subject_id: number;
  @OneToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student_id: number;
  @OneToOne(() => Professor)
  @JoinColumn({ name: 'professor_id' })
  professor_id: number;
  @OneToOne(() => Monitor)
  @JoinColumn({ name: 'monitor_id' })
  monitor_id: number;
}
