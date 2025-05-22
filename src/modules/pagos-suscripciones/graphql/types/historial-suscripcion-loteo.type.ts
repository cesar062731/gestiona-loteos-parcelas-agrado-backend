import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HistorialSuscripcionLoteo {
  @Field(() => Int)
  id: number;
}
