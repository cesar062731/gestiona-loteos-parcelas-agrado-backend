import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EstadoParcelaEnum } from '../../../common/enums/estado-parcela.enum';

@Entity('parcela')
export class Parcela {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({
    type: process.env.NODE_ENV === 'test' ? 'text' : 'enum',
    enum: EstadoParcelaEnum,
    default: EstadoParcelaEnum.OTRO,
  })
  estado: EstadoParcelaEnum;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;
}
