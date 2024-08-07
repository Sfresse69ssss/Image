import * as graphql from "@nestjs/graphql";
import { FaceResolverBase } from "./base/face.resolver.base";
import { Face } from "./base/Face";
import { FaceService } from "./face.service";

@graphql.Resolver(() => Face)
export class FaceResolver extends FaceResolverBase {
  constructor(protected readonly service: FaceService) {
    super(service);
  }
}
