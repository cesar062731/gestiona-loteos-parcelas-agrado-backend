import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Notificaciones {
  @Field(() => ID)
  id: number;
}
