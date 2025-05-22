import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Pago {
  @Field(() => Int)
  id: number;
}
