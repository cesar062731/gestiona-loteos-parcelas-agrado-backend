import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Encuestas {
  @Field(() => ID)
  id: number;
}
