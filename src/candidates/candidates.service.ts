import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './entities/candidate.entity';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto'; 

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepo: Repository<Candidate>,
  ) {}
  findAll(): Promise<Candidate[]> {
    return this.candidateRepo.find();
  }
  async findOne(id: number): Promise<Candidate> {
    const candidate = await this.candidateRepo.findOneBy({ id });
    if (!candidate) {
      throw new NotFoundException(`Candidate with ID ${id} not found`);
    }
    return candidate;
  }
  async create(createCandidateDto: CreateCandidateDto): Promise<Candidate> {
    const candidate = this.candidateRepo.create(createCandidateDto);
    return await this.candidateRepo.save(candidate);
  }
  async update(
    id: number,
    updateCandidateDto: Partial<CreateCandidateDto> | UpdateCandidateDto,
  ): Promise<Candidate> {
    const candidate = await this.findOne(id);
    Object.assign(candidate, updateCandidateDto); 
    return this.candidateRepo.save(candidate);
  }
  async remove(id: number): Promise<Candidate> {
    const candidate = await this.findOne(id); 
    return this.candidateRepo.remove(candidate);
  }
}
