import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class MembresiasLoteo {
  @Field(() => ID)
  id: number;
}
