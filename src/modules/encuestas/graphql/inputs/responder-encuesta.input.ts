import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ResponderEncuesta {
  @Field()
  placeholder: string;
}
