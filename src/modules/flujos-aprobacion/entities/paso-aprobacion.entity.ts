import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { FlujoAprobacion } from './flujo-aprobacion.entity';
import { PasoAprobacionEnum } from '../../../common/enums/estado-aprobacion.enum';

@Entity('paso_aprobacion')
export class PasoAprobacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({
    type: process.env.NODE_ENV === 'test' ? 'text' : 'enum',
    enum: PasoAprobacionEnum as unknown as object,
    default: PasoAprobacionEnum.PENDIENTE,
  })
  estado: PasoAprobacionEnum;

  @ManyToOne(() => FlujoAprobacion, (flujo) => flujo.pasos)
  flujo: FlujoAprobacion;
}
