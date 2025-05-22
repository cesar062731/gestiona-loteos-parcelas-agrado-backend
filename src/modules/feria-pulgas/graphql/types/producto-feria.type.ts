import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ProductoFeria {
  @Field(() => Int)
  id: number;
}
