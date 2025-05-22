import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateParcela {
  @Field()
  placeholder: string;
}
