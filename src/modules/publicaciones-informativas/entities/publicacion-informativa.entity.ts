import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TiposPublicacionEnum } from '../../../common/enums/tipos-publicacion.enum';

@Entity('publicacion_informativa')
export class PublicacionInformativa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  titulo: string;

  @Column({ type: 'text' })
  contenido: string;

  @Column({
    type: process.env.NODE_ENV === 'test' ? 'text' : 'enum',
    enum: TiposPublicacionEnum,
    default: TiposPublicacionEnum.INFORMATIVA,
  })
  tipo: TiposPublicacionEnum;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaPublicacion: Date;
}
