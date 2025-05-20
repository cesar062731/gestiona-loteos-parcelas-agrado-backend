import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFlujosAprobacionInput {
  @Field()
  exampleField: string;
}
