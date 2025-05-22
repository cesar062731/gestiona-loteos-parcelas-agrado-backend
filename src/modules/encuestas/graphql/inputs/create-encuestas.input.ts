import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEncuestasInput {
  @Field()
  exampleField: string;
}
