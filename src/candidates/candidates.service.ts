// Example candidates.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class CandidatesService {
  private candidates = [
    { id: 1, name: 'Alice', votes: 0 },
    { id: 2, name: 'Bob', votes: 0 },
  ];

  getAll() {
    return this.candidates;
  }

  vote(id: number) {
    const candidate = this.candidates.find(c => c.id === id);
    if (candidate) candidate.votes += 1;
    return candidate;
  }
}
