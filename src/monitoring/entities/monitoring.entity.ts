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
  @Column()
  professor_id: number;
  @Column()
  monitor_id: number;
}
