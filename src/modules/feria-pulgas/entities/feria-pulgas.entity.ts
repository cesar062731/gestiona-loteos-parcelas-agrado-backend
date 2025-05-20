import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class FeriaPulgas {
  @Field(() => ID)
  id: number;
}
