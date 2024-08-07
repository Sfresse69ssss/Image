import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FaceService } from "./face.service";
import { FaceControllerBase } from "./base/face.controller.base";

@swagger.ApiTags("faces")
@common.Controller("faces")
export class FaceController extends FaceControllerBase {
  constructor(protected readonly service: FaceService) {
    super(service);
  }
}
