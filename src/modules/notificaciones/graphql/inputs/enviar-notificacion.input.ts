import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class EnviarNotificacion {
  @Field()
  placeholder: string;
}
