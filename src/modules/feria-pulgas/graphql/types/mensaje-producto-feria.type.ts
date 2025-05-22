import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MensajeProductoFeria {
  @Field(() => Int)
  id: number;
}
