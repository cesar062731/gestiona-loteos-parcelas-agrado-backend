import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UsuarioLoteoMembresia {
  @Field(() => Int)
  id: number;
}
