import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ContenidoGlobalResolver {
  @Query(() => String, { name: 'helloContenidoGlobal' })
  hello() {
    return 'Hello from contenido-global!';
  }
}
