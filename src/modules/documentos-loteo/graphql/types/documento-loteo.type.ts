import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DocumentoLoteo {
  @Field(() => Int)
  id: number;
}
