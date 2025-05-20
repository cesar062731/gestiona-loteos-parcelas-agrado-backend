import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBackOfficeInput {
  @Field()
  exampleField: String;
}
