import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ArchivoSubido {
  @Field(() => Int)
  id: number;
}
