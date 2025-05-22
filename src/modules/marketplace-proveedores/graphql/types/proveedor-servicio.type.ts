import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ProveedorServicio {
  @Field(() => Int)
  id: number;
}
