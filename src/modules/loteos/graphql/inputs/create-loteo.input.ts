import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoteo {
  @Field()
  placeholder: string;
}
