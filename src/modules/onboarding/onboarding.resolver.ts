import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class OnboardingResolver {
  @Query(() => String, { name: 'helloOnboarding' })
  hello() {
    return 'Hello from onboarding!';
  }
}
