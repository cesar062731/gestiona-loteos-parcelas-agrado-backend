import { Module } from '@nestjs/common';
import { InteligenciaComunitariaModule } from '../inteligencia-comunitaria/inteligencia-comunitaria.module';
import { GestionLoteosBoModule } from './gestion-loteos-bo.module';

@Module({
  imports: [GestionLoteosBoModule, InteligenciaComunitariaModule],
})
export class BackOfficeModule {}
