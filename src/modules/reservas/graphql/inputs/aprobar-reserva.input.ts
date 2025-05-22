import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AprobarReserva {
  @Field()
  placeholder: string;
}
