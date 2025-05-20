import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class DocumentosLoteo {
  @Field(() => ID)
  id: number;
}
