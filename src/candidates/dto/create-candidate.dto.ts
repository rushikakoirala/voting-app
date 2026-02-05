import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsInt, Min } from 'class-validator';

export class CreateCandidateDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john@example.com' })
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
