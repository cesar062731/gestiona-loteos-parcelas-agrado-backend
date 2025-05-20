import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoteosInput {
  @Field()
  exampleField: string;
}
