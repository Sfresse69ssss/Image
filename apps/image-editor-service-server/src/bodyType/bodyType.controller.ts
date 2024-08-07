import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BodyTypeService } from "./bodyType.service";
import { BodyTypeControllerBase } from "./base/bodyType.controller.base";

@swagger.ApiTags("bodyTypes")
@common.Controller("bodyTypes")
export class BodyTypeController extends BodyTypeControllerBase {
  constructor(protected readonly service: BodyTypeService) {
    super(service);
  }
}
