import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class LoteosResolver {
  @Query(() => String, { name: 'helloLoteos' })
  hello() {
    return 'Hello from loteos!';
  }
}
