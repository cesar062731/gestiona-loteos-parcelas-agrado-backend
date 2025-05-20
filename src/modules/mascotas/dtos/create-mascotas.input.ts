import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMascotasInput {
  @Field()
  exampleField: String;
}
