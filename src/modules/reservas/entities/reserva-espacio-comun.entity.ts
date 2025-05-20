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

  @Column({
    type: process.env.NODE_ENV === 'test' ? 'datetime' : 'timestamp',
  })
  fechaInicio: Date;

  @Column({
    type: process.env.NODE_ENV === 'test' ? 'datetime' : 'timestamp',
  })
  fechaFin: Date;

  @Column({
    type: process.env.NODE_ENV === 'test' ? 'text' : 'enum',
    enum: EstadoReservaEnum,
    default: EstadoReservaEnum.PENDIENTE,
  })
  estado: EstadoReservaEnum;

  @Column({ type: 'text', nullable: true })
  observaciones?: string;

  @Column({
    type: process.env.NODE_ENV === 'test' ? 'text' : 'enum',
    enum: EstadoReservaEnum, // Cambia por el enum real
    default: EstadoReservaEnum.PENDIENTE, // Cambia por el valor por defecto real
  })
  tuCampo: EstadoReservaEnum;
}
