import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEncuesta {
  @Field()
  placeholder: string;
}
