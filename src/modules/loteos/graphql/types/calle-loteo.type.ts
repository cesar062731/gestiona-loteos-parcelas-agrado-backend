import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CalleLoteo {
  @Field(() => Int)
  id: number;
}
