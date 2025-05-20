import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { FlujoAprobacion } from './flujo-aprobacion.entity';
import { EstadoAprobacionEnum } from '../../../common/enums/estado-aprobacion.enum';

@Entity('paso_aprobacion')
export class PasoAprobacion {
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

  @ManyToOne(() => FlujoAprobacion, flujo => flujo.pasos)
  flujo: FlujoAprobacion;
}
