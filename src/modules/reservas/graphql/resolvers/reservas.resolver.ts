import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ReservasResolver {
  @Query(() => String, { name: 'helloReservas' })
  hello() {
    return 'Hello from reservas!';
  }
}
