import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PasoAprobacion {
  @Field(() => Int)
  id: number;
}
