import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HabitanteParcela {
  @Field(() => Int)
  id: number;
}
