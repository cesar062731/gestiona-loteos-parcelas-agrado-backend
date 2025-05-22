import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePublicacion {
  @Field()
  placeholder: string;
}
