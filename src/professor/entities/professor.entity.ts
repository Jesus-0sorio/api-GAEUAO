import { ProfessorSubject } from 'src/monitor_subject/entities/professor_subject.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Professor {
  @Column({ primary: true, unique: true })
  id: number;
  @Column({})
  code: number;
  @Column({ length: 45 })
  name: string;
  @Column({ length: 45 })
  email: string;
  @Column({ length: 45 })
  degree: string;
  @Column({ length: 45, select: false })
  password: string;

  @OneToMany(
    () => ProfessorSubject,
    (professorSubject) => professorSubject.professor_id,
  )
  professorSubject: ProfessorSubject[];
}
