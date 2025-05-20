import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDocumentosLoteoInput {
  @Field()
  exampleField: String;
}
