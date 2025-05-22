import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePagosSuscripcionesInput {
  @Field()
  exampleField: string;
}
