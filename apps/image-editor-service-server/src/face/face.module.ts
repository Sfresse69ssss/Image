import { Module } from "@nestjs/common";
import { FaceModuleBase } from "./base/face.module.base";
import { FaceService } from "./face.service";
import { FaceController } from "./face.controller";
import { FaceResolver } from "./face.resolver";

@Module({
  imports: [FaceModuleBase],
  controllers: [FaceController],
  providers: [FaceService, FaceResolver],
  exports: [FaceService],
})
export class FaceModule {}
