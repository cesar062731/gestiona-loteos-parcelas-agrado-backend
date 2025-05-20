import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// Update the path below if the file exists elsewhere, or create the file if missing.
import { TipoEspacioComunEnum } from '../../../common/enums/tipo-espacio-comun.enum';

@Entity('espacio_comun')
export class EspacioComun {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({
    type: 'enum',
    enum: TipoEspacioComunEnum,
    default: TipoEspacioComunEnum.OTRO,
  })
  tipo: TipoEspacioComunEnum;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ default: true })
  activo: boolean;
}
