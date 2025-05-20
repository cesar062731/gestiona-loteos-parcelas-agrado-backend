import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class FlujosAprobacion {
  @Field(() => ID)
  id: number;
}
