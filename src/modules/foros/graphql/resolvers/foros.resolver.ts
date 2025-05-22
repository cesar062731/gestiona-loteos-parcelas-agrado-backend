import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ForosResolver {
  @Query(() => String, { name: 'helloForos' })
  hello() {
    return 'Hello from foros!';
  }
}
