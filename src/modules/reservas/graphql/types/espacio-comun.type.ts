import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class EspacioComun {
  @Field(() => Int)
  id: number;
}
