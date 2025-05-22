import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ServicioContratado {
  @Field(() => Int)
  id: number;
}
