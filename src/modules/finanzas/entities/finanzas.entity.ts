import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Finanzas {
  @Field(() => ID)
  id: number;
}
