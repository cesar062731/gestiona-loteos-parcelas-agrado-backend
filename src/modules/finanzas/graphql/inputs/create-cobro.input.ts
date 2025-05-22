import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCobro {
  @Field()
  placeholder: string;
}
