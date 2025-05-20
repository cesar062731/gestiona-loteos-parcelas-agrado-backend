import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class PagosSuscripcionesResolver {
  @Query(() => String, { name: 'helloPagosSuscripciones' })
  hello() {
    return 'Hello from pagos-suscripciones!';
  }
}
