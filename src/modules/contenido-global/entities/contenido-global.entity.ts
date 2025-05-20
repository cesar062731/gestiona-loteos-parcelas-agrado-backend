import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ContenidoGlobal {
  @Field(() => ID)
  id: number;
}
