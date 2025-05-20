import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('mascota')
export class Mascota {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 50 })
  tipo: string;

  @Column({ length: 50, nullable: true })
  raza?: string;

  @Column({ type: 'int', nullable: true })
  edad?: number;
}
