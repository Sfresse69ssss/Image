/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FeaturesUpdateManyWithoutBodyTypesInput } from "./FeaturesUpdateManyWithoutBodyTypesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BodyTypeUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FeaturesUpdateManyWithoutBodyTypesInput,
  })
  @ValidateNested()
  @Type(() => FeaturesUpdateManyWithoutBodyTypesInput)
  @IsOptional()
  @Field(() => FeaturesUpdateManyWithoutBodyTypesInput, {
    nullable: true,
  })
  featuresItems?: FeaturesUpdateManyWithoutBodyTypesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField?: string | null;
}

export { BodyTypeUpdateInput as BodyTypeUpdateInput };