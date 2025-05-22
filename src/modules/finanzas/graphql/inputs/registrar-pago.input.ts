import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegistrarPago {
  @Field()
  placeholder: string;
}
