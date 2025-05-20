import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encuesta } from './entities/encuesta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Encuesta])],
})
export class EncuestasModule {}
