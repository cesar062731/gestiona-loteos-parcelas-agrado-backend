import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class MascotasResolver {
  @Query(() => String, { name: 'helloMascotas' })
  hello() {
    return 'Hello from mascotas!';
  }
}
