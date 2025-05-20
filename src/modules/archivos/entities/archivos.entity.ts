import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Archivos {
  @Field(() => ID)
  id: number;
}
