import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { AdminGuard } from './guard/admin.guard';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  // GET /candidates → anyone can call
  @Get()
  getAllCandidates() {
    // Controller delegates logic to Service
    return this.candidatesService.findAll();
  }

  // POST /candidates → Admin only
  @Post()
  @UseGuards(AdminGuard)
  addCandidate(@Body() candidateDto: CreateCandidateDto) {
    // Controller delegates creation logic to Service
    return this.candidatesService.create(candidateDto);
  }
}
