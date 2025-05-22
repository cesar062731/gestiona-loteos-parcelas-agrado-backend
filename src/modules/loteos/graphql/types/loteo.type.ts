import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Loteo {
  @Field(() => Int)
  id: number;
}
