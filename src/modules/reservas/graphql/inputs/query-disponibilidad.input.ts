import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class QueryDisponibilidad {
  @Field()
  placeholder: string;
}
