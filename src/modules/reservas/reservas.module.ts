import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspacioComun } from './entities/espacio-comun.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EspacioComun])],
})
export class ReservasModule {}
