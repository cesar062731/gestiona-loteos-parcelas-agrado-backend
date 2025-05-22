import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Rendicion {
  @Field(() => Int)
  id: number;
}
