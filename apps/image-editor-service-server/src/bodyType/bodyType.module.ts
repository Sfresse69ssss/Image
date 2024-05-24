import { Module } from "@nestjs/common";
import { BodyTypeModuleBase } from "./base/bodyType.module.base";
import { BodyTypeService } from "./bodyType.service";
import { BodyTypeController } from "./bodyType.controller";
import { BodyTypeResolver } from "./bodyType.resolver";

@Module({
  imports: [BodyTypeModuleBase],
  controllers: [BodyTypeController],
  providers: [BodyTypeService, BodyTypeResolver],
  exports: [BodyTypeService],
})
export class BodyTypeModule {}
