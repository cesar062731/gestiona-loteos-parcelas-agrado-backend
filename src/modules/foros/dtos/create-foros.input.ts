import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateForosInput {
  @Field()
  exampleField: String;
}
