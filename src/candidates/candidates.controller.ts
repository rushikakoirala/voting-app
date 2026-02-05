import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { Candidate } from './entities/candidate.entity';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  getAll(): Promise<Candidate[]> {
    return this.candidatesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.candidatesService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Candidate>) {
    return this.candidatesService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: Partial<Candidate>) {
    return this.candidatesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.candidatesService.remove(id);
  }
}
