import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TipoComitePlataforma {
  @Field(() => Int)
  id: number;
}
