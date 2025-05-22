import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateInteligenciaComunitariaInput {
  @Field()
  exampleField: string;
}
