import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LogNotificacion {
  @Field(() => Int)
  id: number;
}
