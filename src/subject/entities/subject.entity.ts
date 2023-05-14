import { Column, Entity } from 'typeorm';

@Entity()
export class Subject {
  @Column({ primary: true, unique: true })
  id: number;
  @Column({ length: 45 })
  name: string;
}
