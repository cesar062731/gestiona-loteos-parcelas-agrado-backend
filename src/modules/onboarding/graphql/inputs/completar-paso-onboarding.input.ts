import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CompletarPasoOnboarding {
  @Field()
  placeholder: string;
}
