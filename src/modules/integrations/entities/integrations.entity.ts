import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Integrations {
  @Field(() => ID)
  id: number;
}
