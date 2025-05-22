import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class EnviarNotificacionManual {
  @Field()
  placeholder: string;
}
