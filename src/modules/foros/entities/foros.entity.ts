import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Foros {
  @Field(() => ID)
  id: number;
}
