import { Module } from '@nestjs/common';
import { GestionUsuariosGlobalBoModule } from './gestion-usuarios-global-bo.module';
import { GestionSuscripcionesBoModule } from './gestion-suscripciones-bo.module';
import { MonitoreoOnboardingBoModule } from './monitoreo-onboarding-bo.module';

@Module({
  imports: [GestionUsuariosGlobalBoModule, GestionSuscripcionesBoModule, MonitoreoOnboardingBoModule]
})
export class GestionLoteosBoModule {}
