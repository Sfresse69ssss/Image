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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { FaceUpdateManyWithoutUsersInput } from "./FaceUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { ImageUpdateManyWithoutUsersInput } from "./ImageUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => FaceUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FaceUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FaceUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  faces?: FaceUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ImageUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ImageUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ImageUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  images?: ImageUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { UserUpdateInput as UserUpdateInput };