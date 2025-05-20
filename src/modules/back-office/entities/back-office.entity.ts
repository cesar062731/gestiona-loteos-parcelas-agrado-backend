import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class BackOffice {
  @Field(() => ID)
  id: number;
}
