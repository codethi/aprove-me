import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateAssignorDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 30)
  document: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 140)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 20)
  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 140)
  name: string;
}
