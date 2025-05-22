import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SolicitarServicio {
  @Field()
  placeholder: string;
}
