import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class EncuestasResolver {
  @Query(() => String, { name: 'helloEncuestas' })
  hello() {
    return 'Hello from encuestas!';
  }
}
