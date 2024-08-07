/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  HairColor as PrismaHairColor,
  Features as PrismaFeatures,
} from "@prisma/client";

export class HairColorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.HairColorCountArgs, "select">
  ): Promise<number> {
    return this.prisma.hairColor.count(args);
  }

  async hairColors(
    args: Prisma.HairColorFindManyArgs
  ): Promise<PrismaHairColor[]> {
    return this.prisma.hairColor.findMany(args);
  }
  async hairColor(
    args: Prisma.HairColorFindUniqueArgs
  ): Promise<PrismaHairColor | null> {
    return this.prisma.hairColor.findUnique(args);
  }
  async createHairColor(
    args: Prisma.HairColorCreateArgs
  ): Promise<PrismaHairColor> {
    return this.prisma.hairColor.create(args);
  }
  async updateHairColor(
    args: Prisma.HairColorUpdateArgs
  ): Promise<PrismaHairColor> {
    return this.prisma.hairColor.update(args);
  }
  async deleteHairColor(
    args: Prisma.HairColorDeleteArgs
  ): Promise<PrismaHairColor> {
    return this.prisma.hairColor.delete(args);
  }

  async findFeaturesItems(
    parentId: string,
    args: Prisma.FeaturesFindManyArgs
  ): Promise<PrismaFeatures[]> {
    return this.prisma.hairColor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .featuresItems(args);
  }
}
