import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Comites {
  @Field(() => ID)
  id: number;
}
