import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class UsuariosResolver {
  @Query(() => String, { name: 'helloUsuarios' })
  hello() {
    return 'Hello from usuarios!';
  }
}
