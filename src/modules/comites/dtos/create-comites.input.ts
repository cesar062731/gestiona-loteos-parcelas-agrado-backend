import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateComitesInput {
  @Field()
  exampleField: string;
}
