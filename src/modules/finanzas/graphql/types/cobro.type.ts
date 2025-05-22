import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Cobro {
  @Field(() => Int)
  id: number;
}
