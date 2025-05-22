import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ImagenProductoFeria {
  @Field(() => Int)
  id: number;
}
