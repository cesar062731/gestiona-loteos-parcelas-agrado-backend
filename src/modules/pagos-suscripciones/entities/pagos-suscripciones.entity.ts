import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class PagosSuscripciones {
  @Field(() => ID)
  id: number;
}
