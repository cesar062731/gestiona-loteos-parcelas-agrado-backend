import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ArticuloEducativo {
  @Field(() => Int)
  id: number;
}
