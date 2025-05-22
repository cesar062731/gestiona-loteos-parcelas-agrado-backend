import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ConfigurarPreferenciasNotificacion {
  @Field()
  placeholder: string;
}
