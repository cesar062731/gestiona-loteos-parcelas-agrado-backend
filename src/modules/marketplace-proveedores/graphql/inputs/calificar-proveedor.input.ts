import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CalificarProveedor {
  @Field()
  placeholder: string;
}
