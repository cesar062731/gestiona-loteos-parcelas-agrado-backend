import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoriaProducto {
  @Field()
  placeholder: string;
}
