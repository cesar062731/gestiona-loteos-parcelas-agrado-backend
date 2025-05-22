import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateComite {
  @Field()
  placeholder: string;
}
