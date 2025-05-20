import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PublicacionInformativa } from './publicacion-informativa.entity';

@Entity('comentario_publicacion')
export class ComentarioPublicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PublicacionInformativa, (pub) => pub.id)
  publicacion: PublicacionInformativa;

  @Column({ type: 'text' })
  comentario: string;

  @Column({ length: 100 })
  autor: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaComentario: Date;
}
