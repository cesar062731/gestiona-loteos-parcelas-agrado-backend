import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEspacioComun {
  @Field()
  placeholder: string;
}
