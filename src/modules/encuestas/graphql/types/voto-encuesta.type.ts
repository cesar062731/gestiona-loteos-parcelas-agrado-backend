import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class VotoEncuesta {
  @Field(() => Int)
  id: number;
}
