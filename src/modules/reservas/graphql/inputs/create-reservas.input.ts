import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateReservasInput {
  @Field()
  exampleField: string;
}
