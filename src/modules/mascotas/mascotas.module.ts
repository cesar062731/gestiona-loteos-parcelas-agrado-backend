import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mascota } from './entities/mascota.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mascota])],
})
export class MascotasModule {}
