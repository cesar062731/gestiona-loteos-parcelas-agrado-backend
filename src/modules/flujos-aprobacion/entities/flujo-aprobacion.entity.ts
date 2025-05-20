import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PasoAprobacion } from './paso-aprobacion.entity';
import { EstadoAprobacionEnum } from '../../../common/enums/estado-aprobacion.enum';

@Entity('flujo_aprobacion')
export class FlujoAprobacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({
    type: 'enum',
    enum: EstadoAprobacionEnum,
    default: EstadoAprobacionEnum.PENDIENTE,
  })
  estado: EstadoAprobacionEnum;

  @OneToMany(() => PasoAprobacion, paso => paso.flujo)
  pasos: PasoAprobacion[];
}
