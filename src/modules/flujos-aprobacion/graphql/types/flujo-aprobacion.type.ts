import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FlujoAprobacion {
  @Field(() => Int)
  id: number;
}
