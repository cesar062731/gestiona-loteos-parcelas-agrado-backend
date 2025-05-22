import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateHistorialSuscripcion {
  @Field()
  placeholder: string;
}
