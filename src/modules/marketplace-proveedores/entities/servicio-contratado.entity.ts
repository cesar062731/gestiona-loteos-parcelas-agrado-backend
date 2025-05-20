import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProveedorServicio } from './proveedor-servicio.entity';

@Entity('servicio_contratado')
export class ServicioContratado {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProveedorServicio, (proveedor) => proveedor.id)
  proveedor: ProveedorServicio;

  @Column({ type: 'date' })
  fechaContratacion: Date;

  @Column({ type: 'date', nullable: true })
  fechaFin?: Date;
}
