import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Candidates')
@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all candidates' })
  @ApiResponse({ status: 200, description: 'List of candidates returned successfully.' })
  async findAll() {
    return await this.candidatesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a candidate by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Candidate ID' })
  @ApiResponse({ status: 200, description: 'Candidate returned successfully.' })
  @ApiResponse({ status: 404, description: 'Candidate not found.' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.candidatesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new candidate' })
  @ApiResponse({ status: 201, description: 'Candidate created successfully.' })
  async create(@Body() createCandidateDto: CreateCandidateDto) {
    return await this.candidatesService.create(createCandidateDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing candidate' })
  @ApiParam({ name: 'id', type: Number, description: 'Candidate ID' })
  @ApiResponse({ status: 200, description: 'Candidate updated successfully.' })
  @ApiResponse({ status: 404, description: 'Candidate not found.' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCandidateDto: Partial<CreateCandidateDto>,
  ) {
    return await this.candidatesService.update(id, updateCandidateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a candidate' })
  @ApiParam({ name: 'id', type: Number, description: 'Candidate ID' })
  @ApiResponse({ status: 200, description: 'Candidate deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Candidate not found.' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.candidatesService.remove(id);
  }
}
