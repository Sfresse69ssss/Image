import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HairColorService } from "./hairColor.service";
import { HairColorControllerBase } from "./base/hairColor.controller.base";

@swagger.ApiTags("hairColors")
@common.Controller("hairColors")
export class HairColorController extends HairColorControllerBase {
  constructor(protected readonly service: HairColorService) {
    super(service);
  }
}
