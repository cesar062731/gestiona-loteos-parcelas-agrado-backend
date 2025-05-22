import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PlanSuscripcion {
  @Field(() => Int)
  id: number;
}
