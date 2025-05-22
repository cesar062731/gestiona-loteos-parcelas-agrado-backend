import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTipoComite {
  @Field()
  placeholder: string;
}
