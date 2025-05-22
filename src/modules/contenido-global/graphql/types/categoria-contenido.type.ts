import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CategoriaContenido {
  @Field(() => Int)
  id: number;
}
