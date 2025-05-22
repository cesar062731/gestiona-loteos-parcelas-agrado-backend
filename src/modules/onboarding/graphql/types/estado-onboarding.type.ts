import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class EstadoOnboarding {
  @Field(() => Int)
  id: number;
}
