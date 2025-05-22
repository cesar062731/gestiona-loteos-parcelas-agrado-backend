import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Comite {
  @Field(() => Int)
  id: number;
}
