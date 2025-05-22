import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCalleLoteo {
  @Field()
  placeholder: string;
}
