import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CategoriaProductoLoteo {
  @Field(() => Int)
  id: number;
}
