import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMascota {
  @Field()
  placeholder: string;
}
