import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ArchivosResolver {
  @Query(() => String, { name: 'helloArchivos' })
  hello() {
    return 'Hello from archivos!';
  }
}
