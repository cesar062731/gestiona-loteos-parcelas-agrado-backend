import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Parcelas {
  @Field(() => ID)
  id: number;
}
