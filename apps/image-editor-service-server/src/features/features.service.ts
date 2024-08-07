import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeaturesServiceBase } from "./base/features.service.base";

@Injectable()
export class FeaturesService extends FeaturesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
