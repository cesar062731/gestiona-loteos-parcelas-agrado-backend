import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Encuesta {
  @Field(() => Int)
  id: number;
}
