import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Mascota {
  @Field(() => Int)
  id: number;
}
