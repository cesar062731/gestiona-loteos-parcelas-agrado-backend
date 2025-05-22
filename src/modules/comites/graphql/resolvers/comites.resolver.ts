import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ComitesResolver {
  @Query(() => String, { name: 'helloComites' })
  hello() {
    return 'Hello from comites!';
  }
}
