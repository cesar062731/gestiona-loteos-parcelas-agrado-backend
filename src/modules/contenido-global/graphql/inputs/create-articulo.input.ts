import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateArticulo {
  @Field()
  placeholder: string;
}
