import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PasoAprobacion } from './paso-aprobacion.entity';
import { PasoAprobacionEnum } from '../../../common/enums/estado-aprobacion.enum';

@Entity('flujo_aprobacion')
export class FlujoAprobacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({
    type: process.env.NODE_ENV === 'test' ? 'text' : 'enum',
    enum: PasoAprobacionEnum,
    default: PasoAprobacionEnum.PENDIENTE,
  })
  estado: PasoAprobacionEnum;

  @OneToMany(() => PasoAprobacion, (paso) => paso.flujo)
  pasos: PasoAprobacion[];
}
