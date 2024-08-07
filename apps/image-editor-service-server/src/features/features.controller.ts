import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeaturesService } from "./features.service";
import { FeaturesControllerBase } from "./base/features.controller.base";

@swagger.ApiTags("features")
@common.Controller("features")
export class FeaturesController extends FeaturesControllerBase {
  constructor(protected readonly service: FeaturesService) {
    super(service);
  }
}
