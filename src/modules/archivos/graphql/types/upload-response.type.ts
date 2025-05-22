import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UploadResponse {
  @Field(() => Int)
  id: number;
}
