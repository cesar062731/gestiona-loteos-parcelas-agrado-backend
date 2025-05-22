import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class NotificacionStatus {
  @Field(() => Int)
  id: number;
}
