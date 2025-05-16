import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth.module';
import { FlujosAprobacionModule } from './modules/flujos-aprobacion/flujos-aprobacion.module';
import { UsuariosModule } from './modules/usuarios.module';

@Module({
  imports: [AuthModule, UsuariosModule, FlujosAprobacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
