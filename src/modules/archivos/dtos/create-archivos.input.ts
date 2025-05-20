import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateArchivosInput {
  @Field()
  exampleField: string;
}
