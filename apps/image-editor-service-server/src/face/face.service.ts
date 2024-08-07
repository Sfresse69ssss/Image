import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FaceServiceBase } from "./base/face.service.base";

@Injectable()
export class FaceService extends FaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
