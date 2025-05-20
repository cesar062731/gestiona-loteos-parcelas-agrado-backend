import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMembresiasLoteoInput {
  @Field()
  exampleField: String;
}
