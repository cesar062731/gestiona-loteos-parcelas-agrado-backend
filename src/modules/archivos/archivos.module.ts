import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArchivoSubido } from './entities/archivo-subido.entity';
import { ParcelasModule } from '../parcelas/parcelas.module';
import { PublicacionesInformativasModule } from '../publicaciones-informativas/publicaciones-informativas.module';
import { DocumentosLoteoModule } from '../documentos-loteo/documentos-loteo.module';
import { ComitesModule } from '../comites/comites.module';
import { EncuestasModule } from '../encuestas/encuestas.module';
import { FeriaPulgasModule } from '../feria-pulgas/feria-pulgas.module';
import { MascotasModule } from '../mascotas/mascotas.module';
import { NotificacionesModule } from '../notificaciones/notificaciones.module';
import { OnboardingModule } from '../onboarding/onboarding.module';
import { PagosSuscripcionesModule } from '../pagos-suscripciones/pagos-suscripciones.module';
import { ReservasModule } from '../reservas/reservas.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { LoteosModule } from '../loteos/loteos.module';
import { MembresiasLoteoModule } from '../membresias-loteo/membresias-loteo.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArchivoSubido]),
    ParcelasModule,
    PublicacionesInformativasModule,
    DocumentosLoteoModule,
    ComitesModule,
    EncuestasModule,
    FeriaPulgasModule,
    MascotasModule,
    NotificacionesModule,
    OnboardingModule,
    PagosSuscripcionesModule,
    ReservasModule,
    UsuariosModule,
    LoteosModule,
    MembresiasLoteoModule,
  ],
})
export class ArchivosModule {}
