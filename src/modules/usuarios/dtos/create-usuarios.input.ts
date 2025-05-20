import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUsuariosInput {
  @Field()
  exampleField: String;
}
