import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidatesModule } from './candidates/candidates.module';
import { PlayModule } from './play/play.module';  

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'admin123',
      database: process.env.DB_NAME || 'voting_app',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CandidatesModule,
    PlayModule,  
  ],
})
export class AppModule {}

