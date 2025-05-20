import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateNotificacionesInput {
  @Field()
  exampleField: string;
}
