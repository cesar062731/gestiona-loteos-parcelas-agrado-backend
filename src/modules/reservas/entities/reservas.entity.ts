import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Reservas {
  @Field(() => ID)
  id: number;
}
