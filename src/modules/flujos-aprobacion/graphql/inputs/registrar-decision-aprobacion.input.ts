import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegistrarDecisionAprobacion {
  @Field()
  placeholder: string;
}
