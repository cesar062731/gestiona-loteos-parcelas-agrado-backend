import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ArchivoSubidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  // ...otros campos...
}
