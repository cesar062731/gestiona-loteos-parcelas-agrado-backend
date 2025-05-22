import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Sugerencia {
  @Field(() => Int)
  id: number;
}
