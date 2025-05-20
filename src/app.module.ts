import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <-- Importa TypeOrmModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { FlujosAprobacionModule } from './modules/flujos-aprobacion/flujos-aprobacion.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ReservasModule } from './modules/reservas/reservas.module';
import { MarketplaceProveedoresModule } from './modules/marketplace-proveedores/marketplace-proveedores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
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
