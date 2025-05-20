import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ContextoUsoArchivoEnum } from '../../../common/enums/contexto-uso-archivo.enum';

@Entity('archivo_subido')
export class ArchivoSubido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nombreOriginal: string;

  @Column({ length: 255 })
  ruta: string;

  @Column({ length: 100 })
  mimeType: string;

  @Column({ type: 'bigint' })
  tamano: number;

  @Column({
    type: 'enum',
    enum: ContextoUsoArchivoEnum,
    default: ContextoUsoArchivoEnum.OTRO,
  })
  contexto: ContextoUsoArchivoEnum;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaSubida: Date;
}
