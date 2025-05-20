import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicacionInformativa } from './entities/publicacion-informativa.entity';
import { ComentarioPublicacion } from './entities/comentario-publicacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PublicacionInformativa, ComentarioPublicacion])],
})
export class PublicacionesInformativasModule {}
