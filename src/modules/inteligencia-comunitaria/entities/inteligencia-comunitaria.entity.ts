import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class InteligenciaComunitaria {
  @Field(() => ID)
  id: number;
}
