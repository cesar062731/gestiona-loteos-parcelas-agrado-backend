import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ReservaEspacioComun {
  @Field(() => Int)
  id: number;
}
