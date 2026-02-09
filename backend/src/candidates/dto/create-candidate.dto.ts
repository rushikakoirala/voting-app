import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsInt, Min } from 'class-validator';

export class CreateCandidateDto {
  @ApiProperty({ example: 'Ram Sharma' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'ram@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Democratic Party' })
  @IsString()
  @IsNotEmpty()
  party: string;

  @ApiProperty({ example: 25 })
  @IsInt()
  @Min(18)
  age: number;
}
