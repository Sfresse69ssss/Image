/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FeaturesService } from "../features.service";
import { FeaturesCreateInput } from "./FeaturesCreateInput";
import { Features } from "./Features";
import { FeaturesFindManyArgs } from "./FeaturesFindManyArgs";
import { FeaturesWhereUniqueInput } from "./FeaturesWhereUniqueInput";
import { FeaturesUpdateInput } from "./FeaturesUpdateInput";

export class FeaturesControllerBase {
  constructor(protected readonly service: FeaturesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Features })
  async createFeatures(
    @common.Body() data: FeaturesCreateInput
  ): Promise<Features> {
    return await this.service.createFeatures({
      data: {
        ...data,

        bodyType: data.bodyType
          ? {
              connect: data.bodyType,
            }
          : undefined,

        face: data.face
          ? {
              connect: data.face,
            }
          : undefined,

        hairColor: data.hairColor
          ? {
              connect: data.hairColor,
            }
          : undefined,
      },
      select: {
        bodyType: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        face: {
          select: {
            id: true,
          },
        },

        hairColor: {
          select: {
            id: true,
          },
        },

        height: true,
        id: true,
        updatedAt: true,
        weight: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Features] })
  @ApiNestedQuery(FeaturesFindManyArgs)
  async featuresItems(@common.Req() request: Request): Promise<Features[]> {
    const args = plainToClass(FeaturesFindManyArgs, request.query);
    return this.service.featuresItems({
      ...args,
      select: {
        bodyType: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        face: {
          select: {
            id: true,
          },
        },

        hairColor: {
          select: {
            id: true,
          },
        },

        height: true,
        id: true,
        updatedAt: true,
        weight: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Features })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async features(
    @common.Param() params: FeaturesWhereUniqueInput
  ): Promise<Features | null> {
    const result = await this.service.features({
      where: params,
      select: {
        bodyType: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        face: {
          select: {
            id: true,
          },
        },

        hairColor: {
          select: {
            id: true,
          },
        },

        height: true,
        id: true,
        updatedAt: true,
        weight: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Features })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFeatures(
    @common.Param() params: FeaturesWhereUniqueInput,
    @common.Body() data: FeaturesUpdateInput
  ): Promise<Features | null> {
    try {
      return await this.service.updateFeatures({
        where: params,
        data: {
          ...data,

          bodyType: data.bodyType
            ? {
                connect: data.bodyType,
              }
            : undefined,

          face: data.face
            ? {
                connect: data.face,
              }
            : undefined,

          hairColor: data.hairColor
            ? {
                connect: data.hairColor,
              }
            : undefined,
        },
        select: {
          bodyType: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          face: {
            select: {
              id: true,
            },
          },

          hairColor: {
            select: {
              id: true,
            },
          },

          height: true,
          id: true,
          updatedAt: true,
          weight: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Features })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFeatures(
    @common.Param() params: FeaturesWhereUniqueInput
  ): Promise<Features | null> {
    try {
      return await this.service.deleteFeatures({
        where: params,
        select: {
          bodyType: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          face: {
            select: {
              id: true,
            },
          },

          hairColor: {
            select: {
              id: true,
            },
          },

          height: true,
          id: true,
          updatedAt: true,
          weight: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
