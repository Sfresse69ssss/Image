import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BodyTypeServiceBase } from "./base/bodyType.service.base";

@Injectable()
export class BodyTypeService extends BodyTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
