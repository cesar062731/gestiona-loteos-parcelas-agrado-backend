import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class FinanzasResolver {
  @Query(() => String, { name: 'helloFinanzas' })
  hello() {
    return 'Hello from finanzas!';
  }
}
