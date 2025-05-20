import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMarketplaceProveedoresInput {
  @Field()
  exampleField: String;
}
