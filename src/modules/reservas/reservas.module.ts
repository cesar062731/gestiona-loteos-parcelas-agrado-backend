import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspacioComun } from './entities/espacio-comun.entity';
import { ReservaEspacioComun } from './entities/reserva-espacio-comun.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EspacioComun, ReservaEspacioComun])],
})
export class ReservasModule {}
