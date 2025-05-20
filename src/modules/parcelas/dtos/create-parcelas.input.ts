import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateParcelasInput {
  @Field()
  exampleField: string;
}
