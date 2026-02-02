import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@Injectable()
export class CandidatesService {
  private candidates: CreateCandidateDto[] = []; // In-memory store

  // Returns all candidates
  findAll(): CreateCandidateDto[] {
    return this.candidates;
  }

  // Adds a new candidate
  create(candidate: CreateCandidateDto): CreateCandidateDto {
    this.candidates.push(candidate);
    return candidate;
  }
}
