import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class EnviarMensajeFeria {
  @Field()
  placeholder: string;
}
