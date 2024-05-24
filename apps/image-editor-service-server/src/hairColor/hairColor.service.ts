import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HairColorServiceBase } from "./base/hairColor.service.base";

@Injectable()
export class HairColorService extends HairColorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
