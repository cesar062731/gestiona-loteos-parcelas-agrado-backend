import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class PublicacionesInformativas {
  @Field(() => ID)
  id: number;
}
