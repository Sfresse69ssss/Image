import * as graphql from "@nestjs/graphql";
import { FeaturesResolverBase } from "./base/features.resolver.base";
import { Features } from "./base/Features";
import { FeaturesService } from "./features.service";

@graphql.Resolver(() => Features)
export class FeaturesResolver extends FeaturesResolverBase {
  constructor(protected readonly service: FeaturesService) {
    super(service);
  }
}
