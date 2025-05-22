import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class InteligenciaComunitariaResolver {
  @Query(() => String, { name: 'helloInteligenciaComunitaria' })
  hello() {
    return 'Hello from inteligencia-comunitaria!';
  }
}
