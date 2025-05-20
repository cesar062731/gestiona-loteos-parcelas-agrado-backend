import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProveedorServicio } from './proveedor-servicio.entity';

@Entity('calificacion_proveedor')
export class CalificacionProveedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  puntaje: number;

  @Column({ type: 'text', nullable: true })
  comentario?: string;

  @ManyToOne(() => ProveedorServicio, proveedor => proveedor.id)
  proveedor: ProveedorServicio;
}
