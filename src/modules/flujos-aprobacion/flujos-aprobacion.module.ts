import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContenidoGlobalModule } from '../contenido-global/contenido-global.module';
import { FlujoAprobacion } from './entities/flujo-aprobacion.entity';
import { PasoAprobacion } from './entities/paso-aprobacion.entity';

@Module({
  imports: [
    ContenidoGlobalModule,
    TypeOrmModule.forFeature([FlujoAprobacion, PasoAprobacion]),
  ],
})
export class FlujosAprobacionModule {}
