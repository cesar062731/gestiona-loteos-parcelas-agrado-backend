import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateControlAccesoInput {
  @Field()
  exampleField: String;
}
