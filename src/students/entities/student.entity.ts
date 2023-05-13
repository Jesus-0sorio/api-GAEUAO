import { Column, Entity } from 'typeorm';

@Entity()
export class Student {
  @Column()
  codigo: number;
  @Column()
  nombre: string;
  @Column()
  correo: string;
  @Column()
  carrera: string;
  @Column()
  contraseña: string;
}
