import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Mascotas {
  @Field(() => ID)
  id: number;
}
