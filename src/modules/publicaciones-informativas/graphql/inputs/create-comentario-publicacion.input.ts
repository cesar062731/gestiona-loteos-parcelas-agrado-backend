import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateComentarioPublicacion {
  @Field()
  placeholder: string;
}
