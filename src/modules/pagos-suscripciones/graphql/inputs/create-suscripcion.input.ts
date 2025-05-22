import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSuscripcion {
  @Field()
  placeholder: string;
}
