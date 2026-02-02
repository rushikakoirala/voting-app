// Example candidates.controller.ts
import { Controller, Get, Param, Post } from '@nestjs/common';
import { CandidatesService } from './candidates.service';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  getAllCandidates() {
    return this.candidatesService.getAll();
  }

  @Post('vote/:id')
  vote(@Param('id') id: string) {
    return this.candidatesService.vote(Number(id));
  }
}
