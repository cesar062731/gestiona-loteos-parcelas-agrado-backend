import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class EstadoOnboardingLoteo {
  @Field(() => Int)
  id: number;
}
