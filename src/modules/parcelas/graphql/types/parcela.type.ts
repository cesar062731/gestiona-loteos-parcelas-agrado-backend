import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Parcela {
  @Field(() => Int)
  id: number;
}
