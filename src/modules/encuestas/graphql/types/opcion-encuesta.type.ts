import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OpcionEncuesta {
  @Field(() => Int)
  id: number;
}
