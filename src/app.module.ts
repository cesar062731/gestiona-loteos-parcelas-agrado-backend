import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { FlujosAprobacionModule } from './modules/flujos-aprobacion/flujos-aprobacion.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ReservasModule } from './modules/reservas/reservas.module';
import { MarketplaceProveedoresModule } from './modules/marketplace-proveedores/marketplace-proveedores.module';

@Module({
  imports: [
    AuthModule,
    UsuariosModule,
    FlujosAprobacionModule,
    ReservasModule,
    MarketplaceProveedoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
