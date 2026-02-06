import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Play')           
@Controller('api/play')    
export class PlayController {
  @Get()
  getPlay() {
    return { message: 'API is working!' };
  }
}
