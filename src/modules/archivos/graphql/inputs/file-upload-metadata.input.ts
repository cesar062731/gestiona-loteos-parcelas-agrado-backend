import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class FileUploadMetadata {
  @Field()
  placeholder: string;
}
