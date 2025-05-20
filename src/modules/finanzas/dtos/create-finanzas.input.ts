import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFinanzasInput {
  @Field()
  exampleField: String;
}
