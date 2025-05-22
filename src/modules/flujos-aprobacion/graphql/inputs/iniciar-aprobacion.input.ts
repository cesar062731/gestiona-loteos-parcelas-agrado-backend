import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class IniciarAprobacion {
  @Field()
  placeholder: string;
}
