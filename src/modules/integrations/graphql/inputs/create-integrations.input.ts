import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateIntegrationsInput {
  @Field()
  exampleField: string;
}
