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
  Features as PrismaFeatures,
  BodyType as PrismaBodyType,
  Face as PrismaFace,
  HairColor as PrismaHairColor,
} from "@prisma/client";

export class FeaturesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FeaturesCountArgs, "select">): Promise<number> {
    return this.prisma.features.count(args);
  }

  async featuresItems<T extends Prisma.FeaturesFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeaturesFindManyArgs>
  ): Promise<PrismaFeatures[]> {
    return this.prisma.features.findMany<Prisma.FeaturesFindManyArgs>(args);
  }
  async features<T extends Prisma.FeaturesFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeaturesFindUniqueArgs>
  ): Promise<PrismaFeatures | null> {
    return this.prisma.features.findUnique(args);
  }
  async createFeatures<T extends Prisma.FeaturesCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeaturesCreateArgs>
  ): Promise<PrismaFeatures> {
    return this.prisma.features.create<T>(args);
  }
  async updateFeatures<T extends Prisma.FeaturesUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeaturesUpdateArgs>
  ): Promise<PrismaFeatures> {
    return this.prisma.features.update<T>(args);
  }
  async deleteFeatures<T extends Prisma.FeaturesDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeaturesDeleteArgs>
  ): Promise<PrismaFeatures> {
    return this.prisma.features.delete(args);
  }

  async getBodyType(parentId: string): Promise<PrismaBodyType | null> {
    return this.prisma.features
      .findUnique({
        where: { id: parentId },
      })
      .bodyType();
  }

  async getFace(parentId: string): Promise<PrismaFace | null> {
    return this.prisma.features
      .findUnique({
        where: { id: parentId },
      })
      .face();
  }

  async getHairColor(parentId: string): Promise<PrismaHairColor | null> {
    return this.prisma.features
      .findUnique({
        where: { id: parentId },
      })
      .hairColor();
  }
}
