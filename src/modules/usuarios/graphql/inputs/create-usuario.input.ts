import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUsuario {
  @Field()
  placeholder: string;
}
