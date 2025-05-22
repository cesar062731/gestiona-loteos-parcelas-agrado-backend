import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class PublicacionesInformativasResolver {
  @Query(() => String, { name: 'helloPublicacionesInformativas' })
  hello() {
    return 'Hello from publicaciones-informativas!';
  }
}
