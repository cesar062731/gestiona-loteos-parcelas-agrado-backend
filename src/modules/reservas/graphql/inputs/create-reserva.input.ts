import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateReserva {
  @Field()
  placeholder: string;
}
