import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ParcelasResolver {
  @Query(() => String, { name: 'helloParcelas' })
  hello() {
    return 'Hello from parcelas!';
  }
}
