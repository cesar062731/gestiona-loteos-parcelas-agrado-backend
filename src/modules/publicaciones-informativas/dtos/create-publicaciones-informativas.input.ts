import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePublicacionesInformativasInput {
  @Field()
  exampleField: string;
}
