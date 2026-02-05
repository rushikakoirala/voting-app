import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsInt, Min } from 'class-validator';

export class CreateCandidateDto {
  @ApiProperty({ example: 'Ram krishna' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Ram@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'public Party' })
  @IsString()
  @IsNotEmpty()
  party: string;

  @ApiProperty({ example: 25 })
  @IsInt()
  @Min(18)
  age: number;
}

