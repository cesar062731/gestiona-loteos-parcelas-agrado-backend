import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class NotificacionesResolver {
  @Query(() => String, { name: 'helloNotificaciones' })
  hello() {
    return 'Hello from notificaciones!';
  }
}
