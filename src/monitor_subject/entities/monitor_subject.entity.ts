import { Monitor } from 'src/monitor/entities/monitor.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'monitor_subject' })
export class MonitorSubject {
  @Column({ primary: true, unique: true })
  id: number;
  @ManyToOne(() => Monitor, (monitor) => monitor.monitor_subject)
  @JoinColumn({ name: 'monitor_id' })
  monitor_id: number;
  @ManyToOne(() => Subject, (subject) => subject.monitor_subject)
  @JoinColumn({ name: 'subject_id' })
  subject_id: number;
}
