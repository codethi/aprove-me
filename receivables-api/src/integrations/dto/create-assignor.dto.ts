import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Max,
} from 'class-validator';

export class CreateAssignorDto {
  @IsNotEmpty()
  @IsString()
  @Max(30)
  document: string;

  @IsNotEmpty()
  @IsString()
  @Max(140)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Max(20)
  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @Max(140)
  name: string;
}
