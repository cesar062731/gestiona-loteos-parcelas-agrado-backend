import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOnboardingInput {
  @Field()
  exampleField: String;
}
