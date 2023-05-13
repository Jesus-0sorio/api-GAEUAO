import { Column, Entity } from 'typeorm';

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
  @Column({ length: 45 })
  password: string;
}
