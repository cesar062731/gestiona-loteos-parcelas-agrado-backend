import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Onboarding {
  @Field(() => ID)
  id: number;
}
