import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductoFeria {
  @Field()
  placeholder: string;
}
