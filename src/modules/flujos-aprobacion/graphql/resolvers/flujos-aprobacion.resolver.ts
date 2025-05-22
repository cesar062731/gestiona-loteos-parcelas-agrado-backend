import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class FlujosAprobacionResolver {
  @Query(() => String, { name: 'helloFlujosAprobacion' })
  hello() {
    return 'Hello from flujos-aprobacion!';
  }
}
