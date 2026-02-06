import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './entities/candidate.entity';
@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(Candidate)
    private candidateRepo: Repository<Candidate>,
  ) {}
  findAll() {
    return this.candidateRepo.find();
  }
  async findOne(id: number) {
    const candidate = await this.candidateRepo.findOneBy({ id });
    if (!candidate) {
      throw new NotFoundException(`Candidate with ID ${id} not found`);
    }
    return candidate;
  }
  create(data: Partial<Candidate>) {
    const candidate = this.candidateRepo.create(data);
    return this.candidateRepo.save(candidate);
  }
  async update(id: number, data: Partial<Candidate>) {
    const candidate = await this.findOne(id); // will throw if not found
    Object.assign(candidate, data); // merge updated fields
    return this.candidateRepo.save(candidate);
  }
  async remove(id: number) {
    const candidate = await this.findOne(id); // will throw if not found
    return this.candidateRepo.remove(candidate);
  }
}
