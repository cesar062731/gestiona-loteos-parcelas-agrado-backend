import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Calificacion {
  @Field(() => Int)
  id: number;
}
