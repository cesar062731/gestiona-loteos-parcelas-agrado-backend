import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class MarketplaceProveedores {
  @Field(() => ID)
  id: number;
}
