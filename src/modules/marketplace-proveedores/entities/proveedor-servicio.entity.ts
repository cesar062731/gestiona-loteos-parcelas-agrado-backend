import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EstadoServicioProveedorEnum } from '../../../common/enums/estado-servicio-proveedor.enum';
import { EspecialidadProveedorEnum } from '../../../common/enums/especialidad-proveedor.enum';

@Entity('proveedor_servicio')
export class ProveedorServicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({
    type: 'enum',
    enum: EspecialidadProveedorEnum,
    default: EspecialidadProveedorEnum.OTRO,
  })
  especialidad: EspecialidadProveedorEnum;

  @Column({
    type: 'enum',
    enum: EstadoServicioProveedorEnum,
    default: EstadoServicioProveedorEnum.ACTIVO,
  })
  estado: EstadoServicioProveedorEnum;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;
}
