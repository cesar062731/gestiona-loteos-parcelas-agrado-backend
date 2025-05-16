import { Module } from '@nestjs/common';
import { ParcelasModule } from './parcelas.module';
import { PublicacionesInformativasModule } from './publicaciones-informativas.module';
import { DocumentosLoteoModule } from './documentos-loteo.module';
import { ComitesModule } from './comites.module';
import { EncuestasModule } from './encuestas.module';
import { FeriaPulgasModule } from './feria-pulgas.module';
import { MascotasModule } from './mascotas.module';
import { NotificacionesModule } from './notificaciones.module';
import { OnboardingModule } from './onboarding.module';
import { PagosSuscripcionesModule } from './pagos-suscripciones.module';
import { ReservasModule } from './reservas.module';
import { UsuariosModule } from './usuarios.module';
import { LoteosModule } from './loteos.module';
import { MembresiasLoteoModule } from './membresias-loteo.module';

@Module({
  imports: [ParcelasModule, PublicacionesInformativasModule, DocumentosLoteoModule, ComitesModule, EncuestasModule, FeriaPulgasModule, MascotasModule, NotificacionesModule, OnboardingModule, PagosSuscripcionesModule, ReservasModule, UsuariosModule, LoteosModule, MembresiasLoteoModule]
})
export class ArchivosModule {}
