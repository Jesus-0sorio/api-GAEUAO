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
  @Column('varchar', { length: 45 })
  classroom: string;
  @Column('varchar', { length: 45 })
  monitoring_status: string;
  @Column('varchar', { length: 45 })
  comment: string;
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