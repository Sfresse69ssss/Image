import { Module } from "@nestjs/common";
import { FeaturesModuleBase } from "./base/features.module.base";
import { FeaturesService } from "./features.service";
import { FeaturesController } from "./features.controller";
import { FeaturesResolver } from "./features.resolver";

@Module({
  imports: [FeaturesModuleBase],
  controllers: [FeaturesController],
  providers: [FeaturesService, FeaturesResolver],
  exports: [FeaturesService],
})
export class FeaturesModule {}
