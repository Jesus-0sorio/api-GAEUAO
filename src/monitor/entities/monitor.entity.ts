import { MonitorSubject } from 'src/monitor_subject/entities/monitor_subject.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Monitor {
  @Column({ primary: true, unique: true })
  id: number;
  @Column({})
  code: number;
  @Column({ length: 45 })
  name: string;
  @Column({ length: 45 })
  email: string;
  @Column({ length: 45, select: false })
  password: string;

  @OneToMany(
    () => MonitorSubject,
    (monitorSubject) => monitorSubject.monitor_id,
  )
  monitor_subject: MonitorSubject[];
}
