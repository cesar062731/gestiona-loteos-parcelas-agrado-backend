import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class MembresiasLoteoResolver {
  @Query(() => String, { name: 'helloMembresiasLoteo' })
  hello() {
    return 'Hello from membresias-loteo!';
  }
}
