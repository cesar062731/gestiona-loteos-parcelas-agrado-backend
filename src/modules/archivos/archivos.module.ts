import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArchivoSubidoEntity } from './entities/archivo-subido.entity';
// Si tienes un repositorio personalizado, impórtalo aquí
// import { ArchivoSubidoRepository } from './archivo-subido.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ArchivoSubidoEntity])],
  // providers: [ArchivoSubidoRepository], // Descomenta si tienes repositorio personalizado
  // exports: [ArchivoSubidoRepository],   // Descomenta si tienes repositorio personalizado
})
export class ArchivosModule {}
