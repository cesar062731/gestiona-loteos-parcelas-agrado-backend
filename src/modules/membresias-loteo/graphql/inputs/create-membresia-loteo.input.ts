import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMembresiaLoteo {
  @Field()
  placeholder: string;
}
