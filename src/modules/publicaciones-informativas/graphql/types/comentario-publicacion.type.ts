import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ComentarioPublicacion {
  @Field(() => Int)
  id: number;
}
