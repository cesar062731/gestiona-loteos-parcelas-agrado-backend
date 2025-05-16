import { Module } from '@nestjs/common';
import { ContenidoGlobalModule } from '../contenido-global/contenido-global.module';

@Module({
  imports: [ContenidoGlobalModule],
})
export class FlujosAprobacionModule {}
