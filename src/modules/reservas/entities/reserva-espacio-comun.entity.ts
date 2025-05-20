import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { EspacioComun } from './espacio-comun.entity';
import { EstadoReservaEnum } from '../../../common/enums/estado-reserva.enum';

@Entity('reserva_espacio_comun')
export class ReservaEspacioComun {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => EspacioComun, { nullable: false })
  espacioComun: EspacioComun;

  @Column({ length: 100 })
  usuarioReserva: string;

  @Column({ type: 'timestamp' })
  fechaInicio: Date;

  @Column({ type: 'timestamp' })
  fechaFin: Date;

  @Column({
    type: 'enum',
    enum: EstadoReservaEnum,
    default: EstadoReservaEnum.PENDIENTE,
  })
  estado: EstadoReservaEnum;

  @Column({ type: 'text', nullable: true })
  observaciones?: string;
}
