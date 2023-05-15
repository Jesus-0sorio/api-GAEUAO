import { ProfessorSubject } from 'src/monitor_subject/entities/professor_subject.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Subject {
  @Column({ primary: true, unique: true })
  id: number;
  @Column({ length: 45 })
  name: string;

  @OneToMany(
    () => ProfessorSubject,
    (professorSubject) => professorSubject.subject_id,
  )
  professor_subject: ProfessorSubject[];
}
