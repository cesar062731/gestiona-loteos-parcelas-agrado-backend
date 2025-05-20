import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateContenidoGlobalInput {
  @Field()
  exampleField: String;
}
