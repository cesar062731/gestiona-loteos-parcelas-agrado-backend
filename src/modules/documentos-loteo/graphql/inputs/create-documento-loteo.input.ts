import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDocumentoLoteo {
  @Field()
  placeholder: string;
}
