import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AuthResolver {
  @Query(() => String, { name: 'helloAuth' })
  hello() {
    return 'Hello from auth!';
  }
}
