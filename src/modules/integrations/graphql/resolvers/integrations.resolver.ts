import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class IntegrationsResolver {
  @Query(() => String, { name: 'helloIntegrations' })
  hello() {
    return 'Hello from integrations!';
  }
}
