import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Usuarios {
  @Field(() => ID)
  id: number;
}
