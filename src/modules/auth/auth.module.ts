import { Module } from '@nestjs/common';
import { LoteosModule } from './loteos.module';
import { MembresiasLoteoModule } from './membresias-loteo.module';
import { ArchivosModule } from './archivos.module';

@Module({
  imports: [LoteosModule, MembresiasLoteoModule, ArchivosModule]
})
export class AuthModule {}
