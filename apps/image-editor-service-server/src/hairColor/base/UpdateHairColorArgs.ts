/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HairColorWhereUniqueInput } from "./HairColorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HairColorUpdateInput } from "./HairColorUpdateInput";

@ArgsType()
class UpdateHairColorArgs {
  @ApiProperty({
    required: true,
    type: () => HairColorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HairColorWhereUniqueInput)
  @Field(() => HairColorWhereUniqueInput, { nullable: false })
  where!: HairColorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HairColorUpdateInput,
  })
  @ValidateNested()
  @Type(() => HairColorUpdateInput)
  @Field(() => HairColorUpdateInput, { nullable: false })
  data!: HairColorUpdateInput;
}

export { UpdateHairColorArgs as UpdateHairColorArgs };
