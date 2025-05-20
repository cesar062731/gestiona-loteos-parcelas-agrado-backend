import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class FeriaPulgasResolver {
  @Query(() => String, { name: 'helloFeriaPulgas' })
  hello() {
    return 'Hello from feria-pulgas!';
  }
}
