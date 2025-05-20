import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Loteos {
  @Field(() => ID)
  id: number;
}
