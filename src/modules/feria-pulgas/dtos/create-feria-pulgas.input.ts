import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFeriaPulgasInput {
  @Field()
  exampleField: string;
}
