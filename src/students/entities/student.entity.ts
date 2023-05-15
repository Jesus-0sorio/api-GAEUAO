import { Column, Entity } from 'typeorm';

@Entity()
export class Student {
  @Column({ primary: true, unique: true })
  id: number;
  @Column({})
  code: number;
  @Column({ length: 45 })
  name: string;
  @Column({ length: 45 })
  email: string;
  @Column({ length: 45 })
  career: string;
  @Column({ length: 45, select: false })
  password: string;
}
