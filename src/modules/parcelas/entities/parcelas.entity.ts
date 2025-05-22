import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { HabitanteParcela } from 'src/modules/usuarios/entities/habitante-parcela.entity';

@ObjectType()
@Entity('parcelas')
export class Parcela {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  codigo: string;

  @Field()
  @Column()
  direccion: string;

  @Field(() => [HabitanteParcela], { nullable: true })
  @OneToMany(() => HabitanteParcela, hp => hp.parcela, { cascade: true })
  habitantes?: HabitanteParcela[];
}
