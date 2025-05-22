import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class BackOfficeResolver {
  @Query(() => String, { name: 'helloBackOffice' })
  hello() {
    return 'Hello from back-office!';
  }
}
