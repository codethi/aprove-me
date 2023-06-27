import { IsDate, IsDecimal, IsNotEmpty } from 'class-validator';

export class CreatePaybleDto {
  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '0,2' })
  value: number;

  @IsNotEmpty()
  @IsDate()
  emissionDate: Date;

  @IsNotEmpty()
  assignor: number;
}
