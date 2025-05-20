import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ControlAcceso {
  @Field(() => ID)
  id: number;
}
