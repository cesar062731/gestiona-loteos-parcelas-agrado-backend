import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field(() => ID)
  id: number;
}
