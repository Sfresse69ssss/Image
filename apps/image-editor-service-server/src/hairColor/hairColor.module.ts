import { Module } from "@nestjs/common";
import { HairColorModuleBase } from "./base/hairColor.module.base";
import { HairColorService } from "./hairColor.service";
import { HairColorController } from "./hairColor.controller";
import { HairColorResolver } from "./hairColor.resolver";

@Module({
  imports: [HairColorModuleBase],
  controllers: [HairColorController],
  providers: [HairColorService, HairColorResolver],
  exports: [HairColorService],
})
export class HairColorModule {}
