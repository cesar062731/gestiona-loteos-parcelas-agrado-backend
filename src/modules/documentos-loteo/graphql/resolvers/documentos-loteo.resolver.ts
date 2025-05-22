import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class DocumentosLoteoResolver {
  @Query(() => String, { name: 'helloDocumentosLoteo' })
  hello() {
    return 'Hello from documentos-loteo!';
  }
}
