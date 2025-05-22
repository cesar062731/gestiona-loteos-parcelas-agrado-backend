import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MiembroComite {
  @Field(() => Int)
  id: number;
}
