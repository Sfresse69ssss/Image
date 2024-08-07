import * as graphql from "@nestjs/graphql";
import { BodyTypeResolverBase } from "./base/bodyType.resolver.base";
import { BodyType } from "./base/BodyType";
import { BodyTypeService } from "./bodyType.service";

@graphql.Resolver(() => BodyType)
export class BodyTypeResolver extends BodyTypeResolverBase {
  constructor(protected readonly service: BodyTypeService) {
    super(service);
  }
}
