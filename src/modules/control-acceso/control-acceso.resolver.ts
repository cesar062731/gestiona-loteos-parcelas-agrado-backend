import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ControlAccesoResolver {
  @Query(() => String, { name: 'helloControlAcceso' })
  hello() {
    return 'Hello from control-acceso!';
  }
}
