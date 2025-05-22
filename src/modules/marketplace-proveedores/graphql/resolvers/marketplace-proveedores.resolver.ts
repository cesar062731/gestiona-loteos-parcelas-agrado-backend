import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class MarketplaceProveedoresResolver {
  @Query(() => String, { name: 'helloMarketplaceProveedores' })
  hello() {
    return 'Hello from marketplace-proveedores!';
  }
}
