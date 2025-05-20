import { Module } from '@nestjs/common';
import { LoteosModule } from '../loteos/loteos.module';
import { MembresiasLoteoModule } from '../membresias-loteo/membresias-loteo.module';
import { ArchivosModule } from '../archivos/archivos.module';

@Module({
  imports: [LoteosModule, MembresiasLoteoModule, ArchivosModule],
})
export class AuthModule {}
