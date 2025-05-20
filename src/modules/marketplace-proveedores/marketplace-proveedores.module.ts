import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedorServicio } from './entities/proveedor-servicio.entity';
import { CalificacionProveedor } from './entities/calificacion-proveedor.entity';
import { ServicioContratado } from './entities/servicio-contratado.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProveedorServicio,
      CalificacionProveedor,
      ServicioContratado,
    ]),
  ],
})
export class MarketplaceProveedoresModule {}
