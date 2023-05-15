import { Professor } from 'src/professor/entities/professor.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'professor_subject' })
export class ProfessorSubject {
  @Column({ primary: true, unique: true })
  id: number;

  @ManyToOne(() => Professor, (professor) => professor.professorSubject)
  @JoinColumn({ name: 'professor_id' })
  professor_id: number;

  @ManyToOne(() => Subject, (subject) => subject.professor_subject)
  @JoinColumn({ name: 'subject_id' })
  subject_id: number;
}
