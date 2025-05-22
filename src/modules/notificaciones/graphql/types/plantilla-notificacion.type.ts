import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PlantillaNotificacion {
  @Field(() => Int)
  id: number;
}
