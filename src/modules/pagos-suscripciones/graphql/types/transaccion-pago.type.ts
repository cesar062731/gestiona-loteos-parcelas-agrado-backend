import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TransaccionPago {
  @Field(() => Int)
  id: number;
}
