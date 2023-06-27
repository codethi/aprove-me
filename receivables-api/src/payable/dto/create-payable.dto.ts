import {
  IsDate,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreatePayableDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '2' })
  value: number;

  @IsNotEmpty()
  @IsDate()
  emissionDate: Date;

  @IsNotEmpty()
  @IsNumber()
  assignor: number;
}
