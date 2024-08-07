import * as graphql from "@nestjs/graphql";
import { HairColorResolverBase } from "./base/hairColor.resolver.base";
import { HairColor } from "./base/HairColor";
import { HairColorService } from "./hairColor.service";

@graphql.Resolver(() => HairColor)
export class HairColorResolver extends HairColorResolverBase {
  constructor(protected readonly service: HairColorService) {
    super(service);
  }
}
