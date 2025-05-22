import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PublicacionInformativa {
  @Field(() => Int)
  id: number;
}
