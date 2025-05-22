import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegistrarProveedor {
  @Field()
  placeholder: string;
}
